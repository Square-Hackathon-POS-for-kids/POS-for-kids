import PropTypes from 'prop-types'
import './menu.css'
import Button from '@mui/material/Button'
import CalculateIcon from '@mui/icons-material/Calculate';
import CategoryIcon from '@mui/icons-material/Category';

const Menu = ({setPage, page}) => {
  return (
    <div className='menu'>
      <div className='wrapper flex-row'>
        <ul className='menuItems'>
          <li>
            <Button id='keypad' className={page === 'keypad' && 'active'} onClick={()=>setPage('keypad')} variant='contained' startIcon={<CalculateIcon />}>
              Keypad
            </Button>
          </li>
          <li>
            <Button id='library' className={page === 'library' && 'active'} onClick={()=>setPage('library')} variant='contained' startIcon={<CategoryIcon />}>
              Library
            </Button>
          </li>
        </ul>
        <Button>
          <img className='settings' src="/assets/library-icons/Settings_Icon.png" alt="settings icon" />
        </Button>
      </div>
    </div>
  )
}

Menu.propTypes = {
  setPage: PropTypes.func.isRequired
}

export default Menu
