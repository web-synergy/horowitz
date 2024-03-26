import { Box } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { FC } from 'react'
import { components } from './components'

type RegularTextProps = {
  blocks: PortableTextBlock[]
}
export const RegularText: FC<RegularTextProps> = ({ blocks }) => {
  return (
    <Box
      sx={{
        columnCount: { xs: 1, lg: 2 },
        '& p:not(:last-child)': {
          marginBottom: '16px',
        },
      }}
    >
      {blocks.map((block, idx) => (
        <PortableText key={idx} value={block} components={components} />
      ))}
    </Box>
  )
}
