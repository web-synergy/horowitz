import {IoNewspaperOutline} from 'react-icons/io5'
import {StructureBuilder} from 'sanity/structure'

export const masterClassStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Майстеркласи')
    .icon(IoNewspaperOutline)
    .child(
      S.documentList()
        .id('all-masterClasses')
        .apiVersion('v2023-08-01')
        .title('Всі майстеркласи')
        .schemaType('masterClass')
        .filter('_type == "masterClass"')
        .menuItems(S.documentTypeList('masterClass').getMenuItems() || []),
    ),
]
