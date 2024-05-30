import {useEffect, useState} from 'react'
import {PatchEvent, StringInputProps, set} from 'sanity'
import {useFormValue, useClient} from 'sanity'

export const GroupInput = (props: StringInputProps) => {
  const [isCreated, setIsCreated] = useState(false)
  const {elementProps, onChange} = props
  const {id} = elementProps
  const client = useClient({apiVersion: '2023-08-30'})
  const docId = (useFormValue(['_id']) as string).split('.').slice(-1)[0]

  useEffect(() => {
    const createGroup = async () => {
      if (isCreated) return
      setIsCreated(true)
      let isExist = await client.fetch(
        `*[_type == 'group' && competitionId == '${docId}' && groupType == '${id}'][0]`,
      )
      if (isExist) return
      const title =
        id === 'junior' ? 'Молодша група' : id === 'intermediate' ? 'Середня група' : 'Старша група'
      const doc = {
        _type: 'group',
        competitionId: docId,
        groupType: id,
        title,
      }
      const createdDoc = await client.create(doc)
      onChange(PatchEvent.from(set({_ref: createdDoc._id, _type: 'reference'})))
      setIsCreated(false)
    }
    createGroup()
  }, [client, docId, id, isCreated, onChange])

  return props.renderDefault(props)
}
