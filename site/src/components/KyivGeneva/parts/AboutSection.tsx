import { Box, Container, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import RegularText from './RegularText'

type Content = {
  title: string
  about_text: Array<string>
}

type AboutSectionProps = {
  content: Content
}

const AboutSection: FC<AboutSectionProps> = ({ content: { title, about_text } }) => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h1"
          component={'h1'}
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '24px', lg: '48px' },
            textTransform: 'capitalize',
          }}
        >
          {title.toLowerCase()}
        </Typography>
        <Stack
          sx={{
            maxHeight: { xs: '100%', lg: '350px' },
            flexWrap: 'wrap',
            rowGap: { xs: '24px', lg: '16px' },
            columnGap: '24px',
          }}
        >
          {about_text.map((chapter, i) => (
            <RegularText key={i} chapter={chapter} />
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default AboutSection
