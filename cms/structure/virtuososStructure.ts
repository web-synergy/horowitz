import {StructureBuilder} from 'sanity/desk'
import {languages} from '../../languages'
import {IoNewspaperOutline} from 'react-icons/io5'
import {IoLanguage} from 'react-icons/io5'
import {singleDocument} from './singleDocument'
import {preview} from './preview'
export const virtuososStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Віртуози планет')
    .icon(IoNewspaperOutline)
    .child(
      S.list()
        .title('Віртуози планет')
        .items([
          singleDocument(S, 'virtuosos', 'Головна', preview(S, 'virtuosos')),

          S.divider(),
          S.listItem()
            .title(`Список статей`)
            .schemaType('virtuososArticle')
            .child(
              S.documentList()
                .id(`virtuososArticle`)
                .apiVersion('v2023-08-01')
                .title(`Всі новини`)
                .schemaType('virtuososArticle')
                .filter('_type == "virtuososArticle"'),
            ),
        ]),
    ),
]
