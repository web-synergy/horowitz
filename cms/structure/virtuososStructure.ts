import {StructureBuilder} from 'sanity/desk'
import {GiGrandPiano} from 'react-icons/gi'
import {singleDocument} from './singleDocument'
import {preview} from './preview'
export const virtuososStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Віртуози планет')
    .icon(GiGrandPiano)
    .child(
      S.list()
        .title('Віртуози планет')
        .items([
          singleDocument(S, 'virtuosos', 'Віртуози планет', preview(S, 'virtuosos')).icon(
            GiGrandPiano,
          ),
          S.divider(),
          S.listItem()
            .title(`Список статей`)
            .schemaType('virtuososArticle')
            .child(
              S.documentList()
                .defaultOrdering([{field: 'priority', direction: 'desc'}])
                .id(`virtuososArticle`)
                .apiVersion('v2023-08-01')
                .title(`Всі новини`)
                .schemaType('virtuososArticle')
                .filter('_type == "virtuososArticle"'),
            ),
        ]),
    ),
]
