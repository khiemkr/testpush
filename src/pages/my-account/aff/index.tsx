import BlankLayout from 'src/@core/layouts/BlankLayout'

import {  Frame1 } from 'src/components'

import { styled } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.common.black
}))

const Home = () => {
  return (
    <Container>
      <Frame1 />
    </Container>
  )
}

export default Home

Home.getLayout = (page: JSX.Element) => <BlankLayout>{page}</BlankLayout>
