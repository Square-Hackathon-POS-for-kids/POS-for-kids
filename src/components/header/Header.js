import PropTypes from 'prop-types'

const Header = ({firstName, lastName}) => {
  return (
    <header>
      <h1>header</h1>
      <div>
        <p>{firstName}</p> <p>{lastName}</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  firstName: 'Olivia',
  lastName: 'Jiménez'
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default Header
