import PropTypes from 'prop-types'
import Container from '@mui/material/Container';
import SidebarList from '../sidebarList/SidebarList';
import EmptySidebar from '../emptySidebar/EmptySidebar';
import Button from '@mui/material/Button'
import currencyFormatter from '../../helpers/currencyFormatter';
import './sidebar.css'

const numOfItemsInCart = (itemsInCartLength) => {
  if(itemsInCartLength > 0) {
    return (
      <span>({itemsInCartLength})</span>
    )
  }
}

const calculateTotal = (itemsInCart) => {
  const total = Object.keys(itemsInCart).reduce((acc, curr) => {
    return acc + itemsInCart[curr].price * itemsInCart[curr].count;
  }, 0);
  return currencyFormatter(total);
};

const Sidebar = ({itemsInCart, page, manageCart}) => {
  const itemsInCartLength = Object.keys(itemsInCart).length;
  const total = calculateTotal(itemsInCart);
  return (
    <Container className='sidebar' maxWidth='sm'>
      <h2>Sale {numOfItemsInCart(itemsInCartLength)}</h2>
      {itemsInCartLength < 1 ?  <EmptySidebar page={page}/> : <SidebarList itemsInCart={itemsInCart} manageCart={manageCart} />}
      <Button className='total-btn' variant='contained'>Total amount {total}</Button>
    </Container>
  )
}

Sidebar.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  manageCart: PropTypes.func.isRequired
}

export default Sidebar
