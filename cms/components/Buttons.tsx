import {StringInputProps, set} from 'sanity'
import {useCallback} from 'react'
import {Button, Grid} from '@sanity/ui'
import {BUTTONS} from '../schemas/documents/annualSummerSchool'

export function Buttons(props: StringInputProps) {
  const {value, onChange} = props

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextValue = event.currentTarget.value
      onChange(set(nextValue))
    },
    [onChange],
  )

  return (
    <Grid columns={BUTTONS.length} gap={3}>
      {BUTTONS.map((btn) => (
        <Button
          key={btn.value}
          value={btn.value}
          mode={value === btn.value ? `default` : `ghost`}
          tone={value === btn.value ? `primary` : `default`}
          onClick={handleClick}
        >
          <img src={btn.image} alt="" style={{display: 'block', width: '100%'}} />
        </Button>
      ))}
    </Grid>
  )
}
