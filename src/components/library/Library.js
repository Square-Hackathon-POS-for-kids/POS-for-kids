import './library.css';

const Library = ({items}) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <img src={item.src} alt={item.name} />
        )
      })}
    </div>
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
