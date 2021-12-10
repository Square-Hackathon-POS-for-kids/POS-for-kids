import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PaidIcon from '@mui/icons-material/Paid';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CancelIcon from '@mui/icons-material/Cancel';
import './checkoutModal.css'

const CheckoutModal = ({open, handleClose, calculatedTotal, handleTransactionOpen}) => {

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
          <div className='checkout-modal'>
            <Button className='total-btn' onClick={()=>handleClose()}><CancelIcon style={{ color: 'white' }} sx={{ fontSize: 50 }} />
              <h2>Cancel</h2>
            </Button>

            <div className="modalTotal">
              <PointOfSaleIcon sx={{ fontSize: 100 }}/>
              <h1>{calculatedTotal()}</h1>
            </div>

            <div className="modalText">
              <h3>Swipe, insert, or tap to pay</h3>
            </div>

            <div className="modalCash">
              <Button onClick={handleTransactionOpen}>
                <PaidIcon sx={{ fontSize: 50 }} />
                <h2> Cash</h2>
              </Button>
            </div>

            <hr></hr>

            <div className="modalCreditCard">
              <Button onClick={handleTransactionOpen}>
                <CreditCardIcon sx={{ fontSize: 50 }}/>
                <h2> Enter credit card number </h2>
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
