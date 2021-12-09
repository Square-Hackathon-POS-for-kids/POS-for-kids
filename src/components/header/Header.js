import PropTypes from 'prop-types'
import './header.css'
import Menu from '../menu/Menu'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = ({firstName, lastName, setPage}) => {
  return (
    <header className='header'>
      <div className='wrapper flex-row'>
        <div className='profile'>
          <img className='profile-photo' src='/assets/child.jpeg' alt='Avatar of child' />
          <p>{firstName} {lastName}</p>
        </div>
        <div className='heading-container'>
          <ShoppingCartOutlinedIcon />
          <h1 className='heading'>Checkout</h1>
        </div>
        <div/>
      </div>
        <Menu setPage={setPage}/>
    </header>
  )
}

Header.defaultProps = {
  firstName: 'Olivia',
  lastName: 'Jiménez'
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Header
