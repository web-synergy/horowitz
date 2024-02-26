import {DefaultDocumentNodeResolver} from 'sanity/structure'
import {preview} from './preview'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `competitionDocument`:
      return S.document().views(preview(S, 'competition'))
    case `news`:
      return S.document().views(preview(S, 'news'))
    case `virtuososArticle`:
      return S.document().views(preview(S, 'virtuosos/article'))

    default:
      return S.document().views([S.view.form()])
  }
}
