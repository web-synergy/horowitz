import { Box, Dialog, IconButton } from '@mui/material'
import { FC, PropsWithChildren, useState } from 'react'

import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Iframe } from '@/components/Main/parts/WatchOnline/styled'
import { urlFor } from '@/config/sanity/imageUrl'
import { IImage } from '@/types/commonTypes'

type DisplayVideoCard = {
  link: string
  poster: IImage
  icon?: string
}

const DisplayVideoCard: FC<DisplayVideoCard> = ({ link, icon = 'mediaPlayer', poster }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleClickOpen = () => setOpen(true)
  console.log('link', link)

  return (
    <Box sx={{ position: 'relative', flexGrow: 1, img: { height: '100%' } }}>
      <img src={urlFor(poster).auto('format').url().toString()} alt="video poster" />

      <Overlay>
        <WebPlayerIcon icon={icon} onClick={handleClickOpen} />
      </Overlay>

      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: '100%',
            overflow: 'hidden',
            bgcolor: theme => theme.palette.common.black,
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '-5px',
            right: 0,
            cursor: 'pointer',
          }}
        >
          <SvgSpriteIcon
            icon="close"
            sx={{
              fill: theme => theme.palette.common.white,
              bgcolor: 'inherit',
              fontSize: '32px',
            }}
          />
        </IconButton>

        <Iframe
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-presentation allow-same-origin allow-popups"
          sx={{ aspectRatio: '16/9', marginTop: '40px' }}
        />
      </Dialog>
    </Box>
  )
}

export default DisplayVideoCard

// ==================== PARTS ====================

const Overlay: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(28, 26, 22, 0.6)',
      }}
    >
      {children}
    </Box>
  )
}

type WebPlayerIconProps = {
  onClick: () => void
  icon: string
}
const WebPlayerIcon: FC<WebPlayerIconProps> = ({ onClick, icon }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          borderRadius: '50%',
          transition: 'background-color 0.1s ease-in-out 0.2s',
          ':hover': {
            lg: {
              backgroundColor: '#ffffff2b',
            },
          },
        }}
      >
        <SvgSpriteIcon
          icon={icon}
          sx={{
            fontSize: {
              xs: '63px',
              md: '92px',
            },
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  )
}
