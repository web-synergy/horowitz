import {FC, PropsWithChildren, ElementType, ReactNode} from 'react'
import {Box, Card, Flex, Text, Heading, Inline} from '@sanity/ui'

const UserDocumentation = () => {
  return (
    <Flex direction={'column'}>
      <Divider />
      <Block
        heading={'Додавання полоски в тексі:'}
        conditionText="Щоб додати в текстовому блоці роздільну лінію, необхідно окремим абзацом додати
            *Divider*:"
        resultText="На сайті буде мати вигляд:"
        conditionComponent={
          <Flex direction={'column'} gap={2}>
            <Text size={2}>текст вище</Text>
            <Text>*Divider*</Text>
            <Text>текст нижче</Text>
          </Flex>
        }
        resultComponent={
          <Flex direction={'column'} gap={2}>
            <Text size={2}>текст вище</Text>
            <Box
              style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.12)',
                height: 1,
                margin: '16px 0',
              }}
            />
            <Text>текст нижче</Text>
          </Flex>
        }
      />
      <Divider />
      <Block
        heading="Додавання посилання в тексі:"
        conditionText="Щоб додати в текстовому блоці посилання, оформать потрібний текст в наступному вигляді:"
        resultText="На сайті буде мати настпуний вигляд і при кліку на синій текст, користувач перейде до посилання https://www.youtube.com/@HorowitzCompetition/playlists :"
        conditionComponent={
          <Inline space={2}>
            <Text>Конкурсні прослуховування будуть транслюватися</Text>
            <Text style={{color: 'brown'}}>
              *link=https://www.youtube.com/@HorowitzCompetition/playlists*
            </Text>
            <Text>на каналі YouTube</Text>
            <Text style={{color: 'brown'}}>*/link*</Text>
            <Text>
              конкурсу Володимира Горовиця та на сторінках партнерів конкурсу в період з 18 по 21
              листопада 2021 р.
            </Text>
          </Inline>
        }
        resultComponent={
          <Inline space={2}>
            <Text>Конкурсні прослуховування будуть транслюватися</Text>
            <Text style={{color: 'blue'}}>на каналі YouTube</Text>
            <Text>
              конкурсу Володимира Горовиця та на сторінках партнерів конкурсу в період з 18 по 21
              листопада 2021 р.
            </Text>
          </Inline>
        }
      />
      <Divider />
      <Block
        heading="Додавання нерозривного пробілу"
        conditionText="Для додавання нерозривного пробілу в тексті, оформіть текст, який потрібно залишити нерозривно на одній строці, за наступним зразком"
        resultText="На сайті даний текст не буде переноситись"
        conditionComponent={
          <Inline space={2}>
            <Text>текст до /</Text>
            <Text style={{color: 'brown'}}>*nowrap* текст, що не розділяється */nowrap*</Text>
            <Text>/ текст після</Text>
          </Inline>
        }
        resultComponent={
          <Inline space={2}>
            <Text>текст до /</Text>
            <Text style={{textWrap: 'nowrap'}}>текст, що не розділяється</Text>
            <Text> /текст після</Text>
          </Inline>
        }
      />
      <Divider />
      <Block
        heading="Оформлення жирного шрифту"
        conditionText="Для оформлення тексту як жирного, необхідно цю частину обгорнити за зразком"
        resultText="На сайті даний текст буде виділенним жирним"
        conditionComponent={
          <Inline space={2}>
            <Text>текст до /</Text>
            <Text style={{color: 'brown'}}>*bold* жирний текст */bold*</Text>
            <Text>/ текст після</Text>
          </Inline>
        }
        resultComponent={
          <Inline space={2}>
            <Text>текст до /</Text>
            <Text style={{fontWeight: 600}}>жирний текст</Text>
            <Text> /текст після</Text>
          </Inline>
        }
      />
      <Divider />
    </Flex>
  )
}

export default UserDocumentation

interface BlockProps {
  heading: string
  conditionText: string
  resultText: string
  conditionComponent: ReactNode
  resultComponent: ReactNode
}

const Block: FC<BlockProps> = ({
  heading,
  conditionText,
  resultText,
  conditionComponent,
  resultComponent,
}) => {
  return (
    <Box>
      <Heading>{heading}</Heading>
      <InstructionItem title={conditionText}>{conditionComponent}</InstructionItem>
      <InstructionItem title={resultText} tone="positive">
        {resultComponent}
      </InstructionItem>
    </Box>
  )
}

interface InstructionItemProps {
  title: string
  tone?: 'caution' | 'positive'
}

const InstructionItem: FC<PropsWithChildren<InstructionItemProps>> = ({
  title,
  tone = 'caution',
  children,
}) => {
  return (
    <Box marginTop={4}>
      <Text>{title}</Text>
      <Card padding={4} radius={3} shadow={1} marginTop={4} tone={tone}>
        {children}
      </Card>
    </Box>
  )
}

const Divider = () => {
  return (
    <Box
      marginTop={4}
      marginBottom={4}
      style={{width: '100%', height: 2, backgroundColor: 'grey'}}
    />
  )
}
