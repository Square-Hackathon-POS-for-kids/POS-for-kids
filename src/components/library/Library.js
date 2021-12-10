import './library.css'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';

const Library = ({items, manageCart, itemsInCart}) => {
  return (
    <ImageList className='library-list' cols={3}>
      {items.map((item) => {
        const itemCount = itemsInCart[item.id]? itemsInCart[item.id].count : 0;
        return (
          <Badge key={item.name} className={ `badge ${item.id}`} badgeContent={itemCount} color="primary">
            <Button onClick={()=>manageCart({item:item, toIncrement:true})}>
              <ImageListItem>
                <img
                  src={`${item.src}`}
                  srcSet={`${item.src}`}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageListItem>
            </Button>
          </Badge>
        )
      })}
    </ImageList>
  )
}

Library.defaultProps = {
  items: [
    {
      id: 'gsc-thin-mints',
      name: 'GSC Thin Mints',
      src: '/assets/item-tiles/gsc-thin-mints.png',
      price: 5.00
    },
    {
      id: 'gsc-do-si-dos',
      name: 'GSC Do-si-dos',
      src: '/assets/item-tiles/gsc-do-si-dos.png',
      price: 5.00
    },
    {
      id: 'gsc-caramel-delites',
      name: 'GSC Caramel DeLites',
      src: '/assets/item-tiles/gsc-caramel-delite.png',
      price: 5.00
    },
    {
      id: 'gsc-peanut-butter-patties',
      name: 'GSC Peanut Butter Patties',
      src: '/assets/item-tiles/gsc-peanut-butter-patties.png',
      price: 5.00
    },
    {
      id: 'gsc-adventurefuls',
      name: 'GSC Adventurefuls',
      src: '/assets/item-tiles/gsc-adventurefuls.png',
      price: 5.00
    },
    {
      id: 'gsc-lemon-ups',
      name: 'GSC Lemon-Ups',
      src: '/assets/item-tiles/gsc-lemon-ups.png',
      price: 5.00
    },
    {
      id: 'gsc-samoas',
      name: 'GSC Samoas',
      src: '/assets/item-tiles/gsc-samoas.png',
      price: 5.00
    },
    {
      id: 'gsc-toffee-tastic',
      name: 'GSC Toffee-Tastic',
      src: '/assets/item-tiles/gsc-toffee-tastic.png',
      price: 5.00
    },
    {
      id: 'gsc-trefoils',
      name: 'GSC Trefoils',
      src: '/assets/item-tiles/gsc-trefoils.png',
      price: 5.00
    },
  ]
}

Library.propTypes = {
  items: PropTypes.array.isRequired,
  manageCart: PropTypes.func.isRequired,
  itemsInCart: PropTypes.object.isRequired
}

export default Library
