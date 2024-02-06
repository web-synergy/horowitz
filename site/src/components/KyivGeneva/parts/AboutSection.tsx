import { Container } from '@mui/material'
import { FC } from 'react'
import RegularText from './RegularText'
import { AboutStack, AboutTitle } from './styled'

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
      <AboutTitle variant="h1" component={'h1'}>
        {title.toLowerCase()}
      </AboutTitle>
      <AboutStack>
        {about_text.map((chapter, i) => (
          <RegularText key={i} chapter={chapter} />
        ))}
      </AboutStack>
    </Container>
  )
}

export default AboutSection
