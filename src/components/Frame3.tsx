import { styled, Box, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  backgroundColor: theme.palette.grey[900],
  overflow: 'hidden'
}))
const Content = styled('p')(({}) => ({
  fontFamily: 'Lacquer, cursive',
  fontWeight: 400,
  fontSize: '32px',
  textAlign: 'center',
  top: '400px',
  background: 'linear-gradient(180deg, #B3FF67 0%, #7CFF55 52.6%, #07A707 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0px 4px 80px #00FF75'
}))

const Frame = styled('div')(({}) => ({
  position: 'relative'
}))

const Slider = styled('div')(({}) => ({}))

const Frame3 = () => {
  const theme = useTheme()

  useEffect(() => {
    let slideIndex = 0
    const showSlide = () => {
      const slides = document.querySelectorAll<HTMLElement>('.mySlides')
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      slideIndex++
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = 'block'
    }

    const changeImg = setInterval(() => {
      showSlide()
    }, 2500)

    return () => {
      clearInterval(changeImg)
    }
  }, [])

  useEffect(() => {
    let slideIndex = 0
    const showZombie = () => {
      const zombies = document.querySelectorAll<HTMLElement>('.zombie')
      for (let i = 0; i < zombies.length; i++) {
        zombies[i].style.display = 'none'
      }
      slideIndex++
      if (slideIndex > zombies.length) {
        slideIndex = 1
      }
      zombies[slideIndex - 1].style.display = 'block'
    }
    const changeZombie = setInterval(() => {
      showZombie()
    }, 500)

    return () => {
      clearInterval(changeZombie)
    }
  }, [])

  return (
    <Container>
      <Frame>
        <Typography textAlign='center' mt={10} color={theme.palette.common.white} fontFamily='Oxanium, cursive'>
          Zomland is about the world of Zombies with many different game genres.{' '}
        </Typography>
        <Slider className='mySlides fade'>
          <Content>CHAPTER 1: AIR DROP</Content>
          <Box component='span' width='100%' height='100%' display='block'>
            <img src='/images/misc/chapter1.svg' alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Slider>
        <Slider className='mySlides fade' style={{ display: 'none' }}>
          <Content>CHAPTER II: RUN TO EARN</Content>
          <Box component='span' width='100%' height='100%' display='block'>
            <img src='/images/misc/chapter2.svg' alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Slider>
        <Slider className='mySlides fade' style={{ display: 'none' }}>
          <Content>CHAPTER III: BATTLE</Content>
          <Box component='span' width='100%' height='100%' display='block'>
            <img src='/images/misc/chapter3.svg' alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Slider>
        <Slider className='mySlides fade' style={{ display: 'none' }}>
          <Content>CHAPTER IV: COMMING SOON</Content>
          <Box component='span' width='100%' height='100%' display='block'>
            <img src='/images/misc/chapter4.svg' alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Slider>
        <Box
          component='span'
          width='180px'
          height='240px'
          display='block'
          position='absolute'
          bottom='50px'
          left='500px'
          className='zombie'
        >
          <img src='/images/misc/zombie1.svg' alt='' style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
          component='span'
          width='180px'
          height='240px'
          display='block'
          position='absolute'
          bottom='50px'
          left='500px'
          className='zombie'
          sx={{ display: 'none' }}
        >
          <img src='/images/misc/zombie2.svg' alt='' style={{ width: '100%', height: '100%' }} />
        </Box>
      </Frame>
    </Container>
  )
}

export default Frame3
