import {useEffect} from 'react'
import {PatchEvent, StringInputProps, set} from 'sanity'
import {useFormValue, useClient} from 'sanity'

export const GroupInput = (props: StringInputProps) => {
  const {elementProps, onChange} = props
  const {id} = elementProps
  const client = useClient({apiVersion: '2023-08-30'})
  const docId = (useFormValue(['_id']) as string).split('.').slice(-1)[0]

  useEffect(() => {
    const createGroup = async () => {
      let isExist: boolean
      if (id === 'junior') {
        isExist = await client.fetch(`*[_type == '${id}' && competitionId == '${docId}'][0]`)
      } else {
        isExist = await client.fetch(
          `*[_type == 'group' && competitionId == '${docId}' && groupType == '${id}'][0]`,
        )
      }
      if (isExist) return
      const title =
        id === 'junior' ? 'Молодша група' : id === 'intermediate' ? 'Середня група' : 'Старша група'
      const doc = {
        _type: id === 'junior' ? 'junior' : 'group',
        competitionId: docId,
        groupType: id,
        title,
      }

      const createdDoc = await client.create(doc)
      onChange(PatchEvent.from(set({_ref: createdDoc._id, _type: 'reference'})))
    }
    createGroup()
  }, [client, docId, id, onChange])

  return props.renderDefault(props)
}
