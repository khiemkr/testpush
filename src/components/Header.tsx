import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

const Container = styled('div')(({ theme }) => ({
  height: '99px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  backgroundColor: theme.palette.grey[900],
  padding: '0 40px'
}))

const Menu = styled('div')(({}) => ({
  height: '51px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer'
}))

const Header = () => {
  //   const theme = useTheme()

  const { isConnected } = useAccount()

  return (
    <Container>
      <Box display='flex'>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
          <img src='/images/svg/exchange.svg' alt='' style={{ width: '20px', height: '20px' }} />
          <Typography color='#353945'>Exchange</Typography>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
          <img src='/images/svg/toking.svg' alt='' style={{ width: '20px', height: '20px' }} />
          <Typography color='#353945'>Staking</Typography>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
          <img src='/images/svg/market.svg' alt='' style={{ width: '20px', height: '20px' }} />
          <Typography color='#353945'>Market</Typography>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
          <img src='/images/svg/event.svg' alt='' style={{ width: '20px', height: '20px' }} />
          <Typography color='#353945'>Event</Typography>
        </Box>
      </Box>
      <Box component='span' height='51px'>
        <Image src='/logo/logo.svg' width='162px' height='31px' alt='logo-zomeland' />
      </Box>
      <Menu>
        {isConnected ? (
          <>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
              <img src='/images/svg/noti.svg' alt='' style={{ width: '40px', height: '40px' }} />
              <Typography color='#353945'> </Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
              <img src='/images/svg/wallet.svg' alt='' style={{ width: '40px', height: '40px' }} />
              <Typography color='#353945'> </Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='24px'>
              <img src='/images/svg/avt.svg' alt='' style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <Typography color='#353945'> </Typography>
            </Box>
          </>
        ) : (
          <Web3Button />
        )}
      </Menu>
    </Container>
  )
}

export default Header
