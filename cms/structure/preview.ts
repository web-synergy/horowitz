import {Iframe} from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
import {previewUrl} from '../environment'
import {StructureBuilder} from 'sanity/structure'

interface DocProps extends SanityDocument {
  slug?: {
    current: string
  }
}

function getPreviewUrl(doc: DocProps, add: string) {
  const slug = doc?.slug?.current

  const result = slug
    ? `${previewUrl}/${add}/${slug}?lang=ua&draft=true`
    : `${previewUrl}/${add}?lang=ua&draft=true`

  return result
}

export const preview = (S: StructureBuilder, previewPath = '') => [
  S.view.form(),
  S.view
    .component(Iframe)
    .title('Preview')
    .options({
      url: (doc: SanityDocument) => getPreviewUrl(doc, previewPath),
      defaultSize: 'desktop',
      reload: {
        button: true,
      },
    }),
]
