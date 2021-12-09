import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import './emptySidebar.css';

const EmptySidebar = ({page}) => {
  const content = {
    keypad: {
      src: '/assets/keypad-icons/Empty_Keypad_Icon.svg',
      text: 'Use the keypad to enter an amount to be paid'
    },
    library: {
      src: '/assets/library-icons/Empty_Cart_Icon.svg',
      text: 'Tap on the items to sell and they will appear here'
    }
  }
  return (
    <Container className='emptySidebar'>
      <img src={content[page].src} alt='' />
      <p>{content[page].text}</p>
    </Container>
  )
}

EmptySidebar.propTypes = {
  page: PropTypes.string.isRequired,
}

export default EmptySidebar
