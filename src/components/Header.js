import PropTypes from 'prop-types'
import Button from './Button' // imports the Button.js component

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 /*style={headingStyle}*/>{title}</h1>
            {/* this Button below is configured in the Button.js component
                we pass in 2 arguments: color, text */}
            <Button color='green' text='Add' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
