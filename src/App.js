import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';
import Library from './components/library/Library';

const App = () => {

  const [page, setPage] = useState('library')

  return (
    <div className='App'>
      <Header className='App-header' setPage={setPage} />
      <div className='wrapper'>
        {page === 'library'? <Library /> : <Keypad />}
      </div>
    </div>
  );
}

export default App;
