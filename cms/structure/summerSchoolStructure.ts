import {GiSun} from 'react-icons/gi'
import {StructureBuilder} from 'sanity/structure'

export const summerSchoolStructure = (S: StructureBuilder) => [
  S.listItem()
    .title('Щорічні музични академії')
    .icon(GiSun)
    .schemaType('annualSummerSchool')
    .child(
      S.documentList()
        .title('Літні музичні академії зі всі роки')
        .filter('_type == "annualSummerSchool"'),
    ),
]
