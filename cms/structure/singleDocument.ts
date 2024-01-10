import {Iframe} from 'sanity-plugin-iframe-pane'
import {StructureBuilder} from 'sanity/desk'

import {SanityDocument} from 'sanity'
import {getPreviewUrl} from './preview'

export const singleDocument = (
  S: StructureBuilder,
  id: string,
  title: string,
  previewPath = '',
) => {
  return S.listItem()
    .title(title)
    .id(id)
    .child(
      S.document()
        .title(title)
        .schemaType(id)
        .documentId(id)
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: SanityDocument) => getPreviewUrl(doc, previewPath),
              defaultSize: 'desktop',
            }),
        ]),
    )
}
