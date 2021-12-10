// copied from: https://mui.com/components/modal/
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './checkoutModal.css';
import PaidIcon from '@mui/icons-material/Paid';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CancelIcon from '@mui/icons-material/Cancel';
import './checkoutModal.css'

const CheckoutModal = ({open, handleClose, calculatedTotal}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: '#006AFF',
    color: 'white',
    border: '2px solid #006AFF',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="checkoutModal"
      >
        <Box sx={style}>

        <Button className='total-btn' onClick={()=>handleClose()}><CancelIcon style={{ color: 'white' }}/></Button>

          {/* <img className='receipt-photo' src='/assets/completed-transaction-icons/receipt-paper_icon.svg' alt='Receipt' /> */}
          <div className="modalHeading">
            <h1>{calculatedTotal()}</h1>
            <PointOfSaleIcon/>
            <h3>Swipe, insert, or tap to pay</h3>
          </div>

          <div className="modalCash">
            <PaidIcon/>
            <h2>Cash</h2>
          </div>
          <br></br>
          <div className="modalCreditCard">
            <CreditCardIcon/>
            <h2>Enter credit card number</h2>
          </div>


          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
