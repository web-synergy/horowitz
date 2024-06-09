import {type SanityDocument, SlugSourceContext} from 'sanity'

import type {Value} from 'sanity-plugin-internationalized-array'

interface CustomSlugContext extends SlugSourceContext {
  parent: {
    subgroup: string | undefined
    name: Value[] | undefined
    _type: string
  }
}
export function createParticipantSlug(document: SanityDocument, context: CustomSlugContext) {
  const {parent} = context

  const name = parent.name

  if (!name) {
    return
  }
  const base = name.find((item) => item._key === 'en')?.value
  const docType = document._type
  const groupType = document.groupType
  if (docType === 'group' && groupType === 'junior') {
    const group = parent.subgroup
    if (!group) {
      return
    }
    return base ? `${group}-${base}` : ''
  } else {
    return base ?? ''
  }
}
