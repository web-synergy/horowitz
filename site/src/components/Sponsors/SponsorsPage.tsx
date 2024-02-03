import { usePartnersStore } from '@/store'
import { Box, Container, Link, Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTemplate from '../Common/PageTemplate'
import SvgSpriteIcon from '../Common/SvgSpriteIcon'
import LogotypesGallery from './parts/LogotypesGallery'
import { MainTitle, TwoGalleryStack } from './styled'

const SponsorsPage: FC = () => {
  const fetchData = usePartnersStore(state => state.fetchPartners)
  const organizers = usePartnersStore(state => state.organizers)
  const mainPartners = usePartnersStore(state => state.mainPartners)
  const sponsors = usePartnersStore(state => state.sponsors)
  const generalInfoPartners = usePartnersStore(state => state.generalInfoPartners)
  const partners = usePartnersStore(state => state.partners)
  const mainInfoPartners = usePartnersStore(state => state.mainInfoPartners)
  const officialInfoPartners = usePartnersStore(state => state.officialInfoPartners)

  const navigate = useNavigate()

  useEffect(() => {
    scrollTo(0, 0)
    if (!organizers) fetchData()
  }, [])

  if (
    !organizers ||
    !mainPartners ||
    !sponsors ||
    !generalInfoPartners ||
    !partners ||
    !mainInfoPartners ||
    !officialInfoPartners
  )
    return null
  return (
    <Box
      component={'section'}
      sx={{
        padding: {
          xs: '48px 0',
          lg: '120px 0',
        },
      }}
    >
      <PageTemplate>
        <Container>
          <MainTitle component={'h1'}>Партнери та друзі</MainTitle>
          <Stack spacing={6}>
            <LogotypesGallery title="Організатори конкурсу" gallery={organizers} />
            <TwoGalleryStack>
              <LogotypesGallery title="Головні партнери" gallery={mainPartners} />
              <LogotypesGallery title="Спонсори" gallery={sponsors} />
            </TwoGalleryStack>
            <LogotypesGallery title="Головні інформаційні партнери" gallery={generalInfoPartners} />
            <TwoGalleryStack>
              <LogotypesGallery title="Партнери" gallery={partners} />
              <LogotypesGallery title="Головні інформаційні партнери" gallery={mainInfoPartners} />
            </TwoGalleryStack>
            <LogotypesGallery
              title="Офіційні інформаційні партнери"
              gallery={officialInfoPartners}
            />
            <Link
              sx={{
                color: theme => theme.palette.neutral[60],
              }}
              onClick={() => navigate(-1)}
            >
              <SvgSpriteIcon sx={{ transform: 'rotate(90deg)' }} icon="arrow" />
              Повернутись до головної сторінки
            </Link>
          </Stack>
        </Container>
      </PageTemplate>
    </Box>
  )
}
export default SponsorsPage
