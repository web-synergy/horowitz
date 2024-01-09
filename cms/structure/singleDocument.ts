import {Iframe} from 'sanity-plugin-iframe-pane'
import {StructureBuilder} from 'sanity/desk'

export const singleDocument = (S: StructureBuilder, id: string, title: string) => {
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
              url: `${''}/ua/?draft=true`,
              defaultSize: 'desktop',
            }),
        ]),
    )
}
