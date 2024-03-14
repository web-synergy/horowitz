import { Box, Dialog, IconButton } from '@mui/material'
import { FC, PropsWithChildren, useState } from 'react'

import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Iframe } from '@/components/Main/parts/WatchOnline/styled'
// !TEMP
import poster from './temp/video_poster.jpg'

type DisplayVideoCard = {
  url: string
  icon?: string
}

const DisplayVideoCard: FC<DisplayVideoCard> = ({ url, icon = 'mediaPlayer' }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleClickOpen = () => setOpen(true)

  return (
    <Box position={'relative'}>
      <img src={poster} alt="video poster" />

      <Overlay>
        <PlayerIcon mediaPlayerIcon={icon} onClick={handleClickOpen} />
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
            sx={{ fill: theme => theme.palette.common.white, bgcolor: 'inherit', fontSize: '32px' }}
          />
        </IconButton>
        <Iframe
          src={url}
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

type PlayerIconProps = {
  onClick: () => void
  mediaPlayerIcon: string
}
const PlayerIcon: FC<PlayerIconProps> = ({ onClick, mediaPlayerIcon }) => {
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
          transition: 'background-color 0.1s allow-discrete 0.2s',
          ':hover': {
            backgroundColor: '#ffffff2b',
          },
        }}
      >
        <SvgSpriteIcon
          icon={mediaPlayerIcon}
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
