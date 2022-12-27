import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Frame1, Frame2, Header } from 'src/components'
import { styled } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.common.black,
}))

const WrapperContent = styled('div')(({ theme }) => ({
  width: '90%',
  paddingTop: '24px',
  margin: '0 auto',
  backgroundColor: theme.palette.common.black
}))

const Home = () => {


  return (
    <Container>
      <Header />
      <WrapperContent>
        <Frame1 />
        <Frame2 />
      </WrapperContent>
    </Container>
  )
}

export default Home

Home.getLayout = (page: JSX.Element) => <BlankLayout>{page}</BlankLayout>
