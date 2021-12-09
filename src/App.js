import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';
import Library from './components/library/Library';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  const [page, setPage] = useState('library')
  const [itemsInCart, setItemsInCart] = useState({});

  const manageCart = ({item, toIncrement}) => {
    console.log('managecart', item);
    let itemChange = itemsInCart[item.id];
    if (toIncrement) {
      if(itemsInCart[item.id]) {
        itemChange.count++
      } else {
        itemChange = {
          name: item.name,
          price: item.price,
          count: 1
        }
      }
      setItemsInCart({...itemsInCart, [item.id]:itemChange});
    } else {
      itemChange.count--
      if (itemChange.count < 1) {
        delete itemsInCart[item.id];
        setItemsInCart({...itemsInCart});
      } else {
        setItemsInCart({...itemsInCart, [item.id]:itemChange});
      }
    }
  };

  return (
    <div className='App'>
      <Header className='App-header' setPage={setPage} />
      <main className='flex-row'>
        {page === 'library'? <Library manageCart={manageCart}/> : <Keypad manageCart={manageCart}/>}
        <Sidebar itemsInCart={itemsInCart} page={page} manageCart={manageCart}/>
      </main>
    </div>
  );
}

export default App;
