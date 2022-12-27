import BlankLayout from 'src/@core/layouts/BlankLayout'
import ItemBox from 'src/components/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Header } from 'src/components'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { styled, Box, Typography, Grid, Button, alpha } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.common.black
}))

const WrapperContent = styled('div')(({}) => ({
  width: '90%',
  paddingTop: '24px',
  margin: '0 auto'
}))
const WrapperDetail = styled('div')(({}) => ({
  display: 'flex',
  gap: '32px'
}))

const WrapperTime = styled('div')(({}) => ({
  height: '200px',
  border: '1px solid',
  width: '100%',
  borderColor: '#66FF66',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  marginTop: '20px',
  backgroundColor: alpha('#66FF66', 0.2)
}))

const WrapperTimeBox = styled('div')(({}) => ({
  width: '80px',
  height: '80px',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  color: 'black',
  backgroundColor: '#66FF66'
}))

const WrapperRelate = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.common.black
}))

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const NFT = () => {
  const [value, setValue] = useState(0)
  const router = useRouter()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleclick = () => {
    console.log('test')
    router.push('/my-account/market-place')
  }

  return (
    <Container>
      <Header />

      <WrapperContent>
        <WrapperDetail>
          <Box flexBasis='50%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box width='100%' display='flex' justifyContent='center' alignItems='center'>
              <img src='/images/imgbox/Thumb.png' alt='img' style={{ width: '100%', height: '100%' }} />
            </Box>
            <WrapperTime>
              <Typography fontSize='20px' color='white' fontFamily="'Josefin Sans', sans-serif">
                Auction ending in
              </Typography>
              <Box display='flex' gap='12px'>
                <WrapperTimeBox>
                  <Typography fontSize='32px' fontWeight={700} color='black' fontFamily="'Josefin Sans', sans-serif">
                    11
                  </Typography>
                </WrapperTimeBox>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Typography fontSize='32px' fontWeight={700} color='white'>
                    :
                  </Typography>
                </Box>
                <WrapperTimeBox>
                  <Typography fontSize='32px' fontWeight={700} color='black' fontFamily="'Josefin Sans', sans-serif">
                    22
                  </Typography>
                </WrapperTimeBox>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Typography fontSize='32px' fontWeight={700} color='white'>
                    :
                  </Typography>
                </Box>
                <WrapperTimeBox>
                  <Typography fontSize='32px' fontWeight={700} color='black' fontFamily="'Josefin Sans', sans-serif">
                    11
                  </Typography>
                </WrapperTimeBox>
              </Box>
            </WrapperTime>
          </Box>
          <Box flexBasis='50%'>
            <Box display='flex' justifyContent='space-between' margin='36px 0'>
              <Typography fontSize='32px' color='white' fontFamily="'Josefin Sans', sans-serif" fontWeight='600'>
                Lumburr #66FF66JHDDA
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <Image src='/images/svg/send.svg' alt='Picture of the author' width={30} height={30} />
                <Image src='/images/svg/share.svg' alt='Picture of the author' width={30} height={30} />
                <Image src='/images/svg/more.svg' alt='Picture of the author' width={30} height={30} />
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' margin='36px 0'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Typography fontSize='32px' color='#66FF66' fontFamily="'Josefin Sans', sans-serif" fontWeight='600'>
                  10.8 ZBC
                </Typography>
                <Typography fontSize='24px' color='#777E91' fontFamily="'Josefin Sans', sans-serif">
                  &#40; ≈ 21.111 &#41;
                </Typography>
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center' gap='12px'>
                <Typography fontSize='16px' color='#777E91' fontFamily="'Josefin Sans', sans-serif">
                  Last Bid
                </Typography>
                <Typography fontSize='24px' color='#FFFFFF' fontFamily="'Josefin Sans', sans-serif">
                  0.5ZBC
                </Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' margin='36px 0'>
              <Button
                variant='contained'
                sx={{
                  width: '45%',
                  borderRadius: '24px',
                  color: 'black',
                  fontSize: '14px',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: '700',
                  textTransform: 'none'
                }}
              >
                Buy Now
              </Button>
              <Button
                variant='outlined'
                sx={{
                  width: '45%',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: '700',
                  textTransform: 'none'
                }}
              >
                Make Offer
              </Button>
            </Box>
            <Box>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                    sx={{
                      width: '100%'
                    }}
                  >
                    <Tab
                      sx={{
                        textTransform: 'none'
                      }}
                      label='Description'
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        textTransform: 'none'
                      }}
                      label='Bids'
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        textTransform: 'none'
                      }}
                      label='History'
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Typography fontFamily="'Josefin Sans', sans-serif" color='white'>
                    A blockchain is a distributed database or ledger that is shared among the nodes of a computer network.
                    As a database, a blockchain stores information electronically in digital format. Blockchains are best
                    known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and
                    decentralized record of transactions. The innovation with a blockchain is that it guarantees the
                    fidelity and security of a record of data and generates trust without the need for a trusted third
                    party.
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Birds
                </TabPanel>
                <TabPanel value={value} index={2}>
                  History
                </TabPanel>
              </Box>
            </Box>
          </Box>
        </WrapperDetail>
        <WrapperRelate>
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
        </WrapperRelate>
      </WrapperContent>
    </Container>
  )
}

export default NFT
NFT.getLayout = (page: JSX.Element) => <BlankLayout>{page}</BlankLayout>

NFT.guestGuard = true
