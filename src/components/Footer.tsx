import { styled, Box, IconButton } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  backgroundColor: theme.palette.grey[900],
  overflow: 'hidden',
  paddingBottom: '100px'
}))

const Frame = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

const Content = styled('p')(({}) => ({
  fontFamily: 'Lacquer, cursive',
  fontWeight: 400,
  fontSize: '64px',
  textAlign: 'center',
  top: '400px',
  background: 'linear-gradient(180deg, #B3FF67 0%, #7CFF55 52.6%, #07A707 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0px 4px 80px #00FF75'
}))

const Text = styled('p')(({ theme }) => ({
  fontFamily: 'Oxanium, cursive',
  fontSize: '24px',
  color: theme.palette.common.white
}))

const Footer = () => {
  return (
    <Container>
      <Frame>
        <Content>CONTACT US</Content>
        <br />
        <Text>Drop us a message via this email</Text>
        <Text>info@zom.land</Text>
        <Box display='flex' gap='10px'>
          <IconButton>
            <Image src='/images/misc/discord.svg' alt='' width='24px' height='24px' />
          </IconButton>
          <IconButton>
            <Image src='/images/misc/tiktok.svg' alt='' width='24px' height='24px' />
          </IconButton>
          <IconButton>
            <Image src='/images/misc/telegram.svg' alt='' width='24px' height='24px' />
          </IconButton>
          <IconButton>
            <Image src='/images/misc/twichter.svg' alt='' width='24px' height='24px' />
          </IconButton>
        </Box>
      </Frame>
    </Container>
  )
}

export default Footer
