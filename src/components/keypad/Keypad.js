import { TextField, Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useState } from 'react';
import './keypad.css';


const Keypad = ({manageCart}) => {
  const numericKeyboard = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      'c', '0', '+',
  ];

  const [customProductValue, setCustomProductValue] = useState('');
  const [customProductID, setCustomProductID] = useState(0);

  const handleNumbericKeyboard = (key) => {
    if (key === 'c') {
      setCustomProductValue('');
    } else if (key === '+') {
      const customProduct = {
        id: customProductID,
        name: 'Custom Product',
        price: Number(customProductValue),
      }
      manageCart({item:customProduct, toIncrement:true})
    } else {
      let newNumber = key;
      if(customProductValue !== null) {
        newNumber = customProductValue + newNumber
      }
      setCustomProductValue(newNumber);
      let newID = customProductID + 1;
      setCustomProductID(newID);
    }
  };

  return (
    <div className="keypad">
      <TextField
          value={customProductValue}
          style={{ fontSize: '25px' }}
          placeholder="$0.00"
          fullWidth={true}
      />
      <ImageList className='keypad-list' cols={3}>
        {numericKeyboard.map((key) => (
          <Button
            variant="contained"
            className="keypad-button"
            onClick={() => handleNumbericKeyboard(key)}
            key={key}>
              {key}
          </Button>
        ))}
      </ImageList>
    </div>
);
}

export default Keypad
