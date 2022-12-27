import { styled, Box } from '@mui/material'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import ItemBox from 'src/components/Box'
import { useRouter } from 'next/router'
import { alpha } from '@mui/material'

// import Sibar from 'src/components/Sibar'

const Container = styled('div')(({}) => ({
  width: '100%'
}))

const WrapperSibar = styled('div')(({}) => ({
  flexBasis: '20%'
}))

const WrapperContent = styled('div')(({}) => ({
  width:'100%'
}))

const WrapperButton = styled('button')(({}) => ({
  border: '2px solid',
  borderColor: '#777E90',
  width: '140px',
  height: '42px',
  color: 'white',
  fontSize: '18px',
  borderRadius: '28px',
  fontFamily:"'Josefin Sans', sans-serif",
  fontWeight:'500',
  backgroundColor: 'transparent',
  '&:hover': {
    borderColor: '#2BDC57',
    backgroundColor: alpha('#66FF66', 0.5),
    cursor: 'pointer'
  }
}))

const Frame2 = () => {
  const router = useRouter()
  const [showsibar, setShowSibar] = useState(false)

  const handleclick = () => {
    console.log('test')
    router.push('/my-account/market-place')
  }

  const handleSibar = () => {
    setShowSibar(!showsibar)
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
        }}
      >
        <Box position='relative' onClick={handleSibar}>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
        <Box position='relative'>
          <Box position='absolute' top='12px' left='12px'>
            <img src='/images/svg/filter.svg' alt='' style={{ width: '20px', height: '20px' }} />
          </Box>
          <WrapperButton>filter</WrapperButton>
          <Box position='absolute' top='12px' right='20px'>
            <img src='/images/svg/add.svg' alt='' style={{ width: '15px', height: '15px' }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        {showsibar ? <WrapperSibar>
          {/* <Sibar/> */}
        </WrapperSibar> : null}
        <WrapperContent>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
            <Grid item xs={6} md={3}>
              <ItemBox onclick={handleclick} />
            </Grid>
          </Grid>
        </WrapperContent>
      </Box>
    </Container>
  )
}

export default Frame2
