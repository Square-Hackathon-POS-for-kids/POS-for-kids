import PropTypes from 'prop-types'
import Container from '@mui/material/Container';
import SidebarList from '../sidebarList/SidebarList';
import EmptySidebar from '../emptySidebar/EmptySidebar';
import Button from '@mui/material/Button'

import './sidebar.css'

const numOfItemsInCart = (itemsInCartLength) => {
  if(itemsInCartLength > 0) {
    return (
      <span>({itemsInCartLength})</span>
    )
  }
}

const Sidebar = ({itemsInCart, page, manageCart, handleOpen, calculatedTotal}) => {
  const itemsInCartLength = Object.keys(itemsInCart).length;
  const total = calculatedTotal();
  return (
    <Container className='sidebar' maxWidth='sm'>
      <h2>Sale {numOfItemsInCart(itemsInCartLength)}</h2>
      {itemsInCartLength < 1 ?  <EmptySidebar page={page}/> : <SidebarList itemsInCart={itemsInCart} manageCart={manageCart} />}
      <Button className='total-btn' variant='contained' onClick={()=>handleOpen()}>Total amount {total} </Button>
    </Container>
  )
}

Sidebar.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  manageCart: PropTypes.func.isRequired
}

export default Sidebar
