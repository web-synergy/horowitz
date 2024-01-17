import {StructureBuilder} from 'sanity/desk'

export const singleDocument = (S: StructureBuilder, id: string, title: string, preview?: any) => {
  return S.listItem()
    .title(title)
    .id(id)
    .child(S.document().title(title).schemaType(id).documentId(id).views(preview))
}
