import './library.css'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Library = ({items}) => {
  return (
    <ImageList className='library-list' cols={3}>
      {items.map((item) => {
        return (
          <Button>
            <ImageListItem key={item.img}>
              <img
                src={`${item.src}`}
                srcSet={`${item.src}`}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          </Button>
        )
      })}
    </ImageList>
  )
}

Library.defaultProps = {
  items: [
    {
      name: 'GSC Thin Mints',
      src: '/assets/item-tiles/gsc-thin-mints.png',
      price: 5.00
    },
    {
      name: 'GSC Do-si-dos',
      src: '/assets/item-tiles/gsc-do-si-dos.png',
      price: 5.00
    },
    {
      name: 'GSC Caramel DeLites',
      src: '/assets/item-tiles/gsc-caramel-delite.png',
      price: 5.00
    },
    {
      name: 'GSC Peanut Butter Patties',
      src: '/assets/item-tiles/gsc-peanut-butter-patties.png',
      price: 5.00
    }
  ]
}

export default Library
