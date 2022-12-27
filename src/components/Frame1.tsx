import { styled,alpha } from '@mui/material'
import InputBase from '@mui/material/InputBase'


const Container = styled('div')(({ }) => ({
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative'

  // paddingBottom: '200px'
}))

const Search = styled('div')(({ theme }) => ({
  width:'100%',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#141416',

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  height: '48px',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  paddingTop: '10px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const SearchIcon = styled('span')(({}) => ({
  background: 'url(/images/logo/search.svg)',
  width: '1.5rem',
  height: '1.5rem'
}))

const Frame1 = () => {
  return (
    <Container>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder='Search by Id / Name' inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </Container>
  )
}

export default Frame1
