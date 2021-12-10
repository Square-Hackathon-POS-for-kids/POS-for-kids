import './sidebarList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types'
import currencyFormatter from '../../helpers/currencyFormatter';
import Button from '@mui/material/Button'

const SidebarList = ({itemsInCart, manageCart}) => {
  return (
    <List className='sidebarList-container' sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {Object.keys(itemsInCart).map((item) => {
        const {name, price, count} = itemsInCart[item];
        const formattedPrice = currencyFormatter(price);
        return (
          <ListItem className='sidebarList row' key={item}>
            <ListItemText className='column name' primary={name}/>
            <ListItemText className='column price' primary={formattedPrice}/>
            <Button variant='contained' onClick={()=>manageCart({item:{...itemsInCart[item],id:item}, toIncrement:false})}> - </Button>
            <ListItemText className='column count' primary={count}/>
            <Button variant='contained' onClick={()=>manageCart({item:{...itemsInCart[item],id:item}, toIncrement:true})}> + </Button>
          </ListItem>
        )
        })
      }
    </List>
  )
}

SidebarList.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  manageCart: PropTypes.func.isRequired
}

export default SidebarList
