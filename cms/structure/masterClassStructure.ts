import {languages} from '../../languages'
import {IoNewspaperOutline} from 'react-icons/io5'
import {IoLanguage} from 'react-icons/io5'
import {StructureBuilder} from 'sanity/structure'
export const masterClassStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Майстеркласи')
    .icon(IoNewspaperOutline)
    .child(
      S.list()
        .title('Майстеркласи')
        .items([
          ...languages.map((language) =>
            S.listItem()
              .icon(IoLanguage)
              .title(`Майстеркласи (${language.id.toLocaleUpperCase()})`)
              .id(language.id)
              .schemaType('masterClass')
              .child(
                S.documentList()
                  .apiVersion('v2023-08-01')
                  .id(language.id)
                  .title(`${language.title} Майстеркласи`)
                  .schemaType('masterClass')
                  .filter('_type == "masterClass" && length(title[_key !=$language].value) !=1')
                  .params({language: language.id})
                  //@ts-ignore
                  .menuItems([...S.documentTypeList('masterClass').getMenuItems()]),
              ),
          ),
          S.divider(),
          S.listItem()
            .title(`Всі майстеркласи`)
            .schemaType('masterClass')
            .child(
              S.documentList()
                .id(`all-masterClasses`)
                .apiVersion('v2023-08-01')
                .title(`Всі майстеркласи`)
                .schemaType('masterClass')
                .filter('_type == "masterClass"')
                .menuItems([...S.documentTypeList('masterClass').getMenuItems()]),
            ),
        ]),
    ),
]
