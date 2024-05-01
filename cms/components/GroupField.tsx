import React from 'react'
import {ObjectFieldProps, CrossDatasetReferenceValue} from 'sanity'
import {Button} from '@sanity/ui'
import {IntentLink} from 'sanity/router'

export const GroupField = (props: ObjectFieldProps<CrossDatasetReferenceValue>) => {
  const {title, value} = props

  if (!value) {
    return props.renderDefault(props)
  }

  const docId = value._ref as string

  return (
    <IntentLink intent="edit" params={{id: docId}} style={{width: '100%', display: 'inline-block'}}>
      <Button tone="default" style={{cursor: 'pointer', width: '100%'}}>
        Редагувати {title}
      </Button>
    </IntentLink>
  )
}
