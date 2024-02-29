import { Button, Stack, styled } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

type ListItem = {
  title: string
}
type LinksListProps = {
  linksList: ListItem[]
  path?: string
}

const LinksList: FC<LinksListProps> = ({ linksList, path }) => {
  const { t } = useTranslation()
  return (
    <LinksListStack>
      {linksList.map((navigation, i) => (
        <Button
          key={i}
          variant="primary"
          component={RouterLink}
          to={path ? `/${path}/${navigation.title}` : navigation.title}
          sx={{
            width: {
              xs: 288,
              lg: 336,
            },
            height: {
              xs: 48,
              md: 60,
            },
            '&.MuiButton-root': {
              padding: '16px 0',
              fontSize: {
                xs: '16px',
                lg: '18px',
              },
            },
          }}
        >
          {t(`navigation.${navigation.title}`)}
        </Button>
      ))}
    </LinksListStack>
  )
}

export default LinksList

// =============== PARTS ===============

const LinksListStack = styled(Stack)(({ theme }) => ({
  maxHeight: '100%',
  rowGap: '24px',
  alignItems: 'center',
  alignContent: 'center', // центрує лінки відносно контейнера

  [theme.breakpoints.up('md')]: {
    flexWrap: 'wrap',
    columnGap: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '56px',
    rowGap: '48px',
  },
}))
