import {StructureBuilder} from 'sanity/structure'
import {FaAward} from 'react-icons/fa'

export const competitionStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Конкурси')
    .icon(FaAward)
    .schemaType('competition')
    .child(
      S.documentList()
        .title('Конкурси Горовиця')
        .filter('_type == "competition"')
        .apiVersion('v2023-08-30'),
    ),
]
