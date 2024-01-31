import { Box } from '@mui/material'
import { FC } from 'react'

interface ScrollDownBtnProps {
  onClick: () => void
}

const ScrollDownBtn: FC<ScrollDownBtnProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: {
          xs: '30px',
          md: '40px',
        },
        left: '50%',
        // marginLeft: '-16px',
        display: 'block',
        width: '36px',
        height: '36px',
        border: '2px solid #FFF',
        // backgroundSize: '14px auto',
        borderRadius: '50%',
        zIndex: 10,
        WebkitAnimation: 'bounce 2s infinite 2s',
        animation: 'bounce 2s infinite 2s',
        WebkitTransition: 'all .2s ease-in',
        transition: 'all .2s ease-in',
        cursor: 'pointer',

        '&:before': {
          content: '""',
          position: 'absolute',
          top: 'calc(50% - 6px)',
          left: 'calc(50% - 5px)',
          transform: 'rotate(-45deg)',
          display: 'block',
          width: '10px',
          height: '10px',
          border: '2px solid white',
          borderWidth: '0 0 2px 2px',
        },

        '@keyframes bounce': {
          '0%, 100%, 20%, 50%, 80%': {
            WebkitTransform: 'translateY(0)',
            msTransform: 'translateY(0)',
            transform: 'translateY(0)',
          },
          '40%': {
            WebkitTransform: 'translateY(-10px)',
            msTransform: 'translateY(-10px)',
            transform: 'translateY(-10px)',
          },
          '60%': {
            WebkitTransform: 'translateY(-5px)',
            msTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
          },
        },
      }}
      onClick={() => onClick()}
    />
  )
}

export default ScrollDownBtn
