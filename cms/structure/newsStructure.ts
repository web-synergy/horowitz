import {StructureBuilder} from 'sanity/desk'
import {languages} from '../../languages'
import {IoNewspaperOutline} from 'react-icons/io5'
import {IoLanguage} from 'react-icons/io5'
export const newsStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Новини')
    .icon(IoNewspaperOutline)
    .child(
      S.list()
        .title('Новини')
        .items([
          ...languages.map((language) =>
            S.listItem()
              .icon(IoLanguage)
              .title(`Новини (${language.id.toLocaleUpperCase()})`)
              .id(language.id)
              .schemaType('news')
              .child(
                S.documentList()
                  .apiVersion('v2023-08-01')
                  .id(language.id)
                  .title(`${language.title} Новини`)
                  .schemaType('news')
                  .filter('_type == "news" && length(title[_key !=$language].value) !=1')
                  .params({language: language.id}),
              ),
          ),
          S.divider(),
          S.listItem()
            .title(`Всі новини`)
            .schemaType('news')
            .child(
              S.documentList()
                .id(`all-news`)
                .apiVersion('v2023-08-01')
                .title(`Всі новини`)
                .schemaType('news')
                .filter('_type == "news"'),
            ),
        ]),
    ),
]
