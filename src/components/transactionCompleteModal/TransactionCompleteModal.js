import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './transactionCompleteModal.css';

const TransactionCompleteModal = ({handleTransactionOpen, handleTransactionClose, isOpenTransactionModal}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'white',
    color: '#006AFF',
    border: '2px solid #006AFF',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={isOpenTransactionModal}
        onClose={handleTransactionClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="completed-transaction"
      >
        <Box sx={style}>
          <div className='completed-transaction'>
            <Typography className="modal-title" variant="h3" component="h2">
              New Sale
            </Typography>
            <main>
              <div className='center margin-bottom'>
                  <img className='fireworks' src='/assets/completed-transaction-icons/Done_Fireworks_Icon.svg' alt='done fireworks' />
                  <Typography className="done-text margin-bottom" variant="h1" component="h1">
                    Done!
                  </Typography>
                <div className='row center margin-bottom'>
                  <Typography className="send-receipt" variant="h5" component="h5">
                    Send Receipt
                  </Typography>
                  <img className='fireworks' src='/assets/completed-transaction-icons/receipt-paper_icon.svg' alt='receipt' />
                </div>
              </div>
              <div className='row center button-container double-button'>
                <Button variant='contained'>Text Message</Button>
                <Button variant='contained'>Email</Button>
              </div>
              <div className='row center button-container'>
                <Button variant='contained' onClick={handleTransactionClose}>No Receipt</Button>
              </div>
            </main>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionCompleteModal;
