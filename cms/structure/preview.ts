import {DefaultDocumentNodeResolver} from 'sanity/desk'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
// import {previewUrl} from '../environment'

interface DocProps extends SanityDocument {
  slug?: {
    current: string
  }
}
const previewUrl = ' '
export function getPreviewUrl(doc: DocProps, add: string) {
  const slug = doc?.slug?.current
  const result = slug ? `${previewUrl}/ua/${add}/${slug}?draft=true` : `${previewUrl}/ua/`

  console.log(previewUrl)
  console.log(result)
  return result
}
// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents

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
