import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';
import Library from './components/library/Library';
import Sidebar from './components/sidebar/Sidebar';
import CheckoutModal from './components/checkoutModal/CheckoutModal';
import currencyFormatter from './helpers/currencyFormatter';
import TransactionCompleteModal from './components/transactionCompleteModal/TransactionCompleteModal';

const App = () => {

  // For Checkout Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // For transactionComplete Modal
  const [isOpenTransactionModal, setTransactionModal] = useState(false);
  const handleTransactionOpen = () => setTransactionModal(true);
  const handleTransactionClose = () =>  {
    setItemsInCart({});
    handleClose();
    setTransactionModal(false);
  }

  // For setting page
  const [page, setPage] = useState('library')

  // For items in cart
  const [itemsInCart, setItemsInCart] = useState({});

  const manageCart = ({item, toIncrement}) => {
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

  const calculatedTotal = () => {
    const total = Object.keys(itemsInCart).reduce((acc, curr) => {
      return acc + itemsInCart[curr].price * itemsInCart[curr].count;
    }, 0);
    return currencyFormatter(total);
  };

  return (
    <div className='App'>
      <Header className='App-header' setPage={setPage} />
      <main className='flex-row'>
        {page === 'library'? <Library manageCart={manageCart} itemsInCart={itemsInCart}/> : <Keypad manageCart={manageCart}/>}
        <Sidebar itemsInCart={itemsInCart} page={page} manageCart={manageCart} handleOpen={handleOpen} calculatedTotal={calculatedTotal} open={open}/>
      </main>
      <CheckoutModal handleClose={handleClose} calculatedTotal={calculatedTotal} open={open} handleTransactionOpen={handleTransactionOpen}/>
      <TransactionCompleteModal handleTransactionOpen={handleTransactionOpen} handleTransactionClose={handleTransactionClose} isOpenTransactionModal={isOpenTransactionModal}/>
    </div>
  );
}

export default App;
