import PropTypes from 'prop-types'
import './menu.scss'
import Button from '@mui/material/Button'
import CalculateIcon from '@mui/icons-material/Calculate';
import CategoryIcon from '@mui/icons-material/Category';

const Menu = ({setPage}) => {
  return (
    <div className='menu'>
      <div className='wrapper flex-row'>
        <ul className='menuItems'>
          <li>
            <Button onClick={()=>setPage('keypad')} variant='contained' startIcon={<CalculateIcon />}>
              Keypad
            </Button>
          </li>
          <li>
            <Button onClick={()=>setPage('library')} variant='contained' startIcon={<CategoryIcon />}>
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
