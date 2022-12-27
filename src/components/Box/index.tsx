import { styled, Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const Container = styled('div')(({}) => ({
  paddingTop: '24px',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  overflow: 'hidden'
}))

const WrapperThum = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}))

const WrapperDes = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const WrapperTime = styled('div')(({}) => ({
  position: 'absolute',
  backgroundColor: '#66FF66',
  borderRadius: '4px',
  padding: '2px',
  bottom: '4px',
  left: '32px'
}))

const WrapperLike = styled('div')(({}) => ({
  position: 'absolute',
  padding: '2px',
  top: '4px',
  right: '32px'
}))

interface Props {
  onclick: any
}

const ItemBox = ({ onclick }: Props) => {
  return (
    <Container onClick={onclick}>
      <Box>
        <WrapperThum>
          <img src='/images/imgbox/Thumb.png' alt='img' style={{ width: '100%', height: '100%' }} />
          <WrapperTime>
            <Typography color='black'>12:11:00</Typography>
          </WrapperTime>
          <WrapperLike>
            <Image src='/images/svg/heart.svg' alt='Picture of the author' width={40} height={40} />
          </WrapperLike>
        </WrapperThum>
        <WrapperDes>
          <Box>
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  fontFamily:"'Josefin Sans', sans-serif",
                   fontWeight:'500'
                }}
              >
                Lumburr #KU98707bw
              </Typography>
            </Box>
            <Box>
              <AvatarGroup
                max={4}
                sx={{
                  '& .MuiAvatar-root': { width: 20, height: 20 }
                }}
              >
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Travis Howard' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Cindy Baker' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Agnes Walker' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Trevor Henderson' src='https://mui.com/static/images/avatar/1.jpg' />
              </AvatarGroup>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'white',
                fontFamily:"'Josefin Sans', sans-serif",
                 fontWeight:'500'
              }}
            >
              10.8ZBC
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '10px',
                textAlign: 'end',
                fontFamily:"'Josefin Sans', sans-serif",
                 fontWeight:'500'
              }}
            >
              0.5ZBC
            </Typography>
          </Box>
        </WrapperDes>
      </Box>
    </Container>
  )
}

export default ItemBox
