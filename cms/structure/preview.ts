import {DefaultDocumentNodeResolver} from 'sanity/desk'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
import {previewUrl} from '../environment'

interface DocProps extends SanityDocument {
  slug?: {
    current: string
  }
}

export function getPreviewUrl(doc: DocProps, add: string) {
  const slug = doc?.slug?.current
  const result = slug ? `${previewUrl}${add}/${slug}?draft=true` : `${previewUrl}${add}?draft=true`

  return result
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `aboutCompetition`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc, 'news'),
            defaultSize: 'desktop',
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
