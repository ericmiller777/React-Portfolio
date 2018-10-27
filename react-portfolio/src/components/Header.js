import React from 'react'
import PropTypes from 'prop-types'
import picture from '../images/0.jpg'
import logo from '../images/logo.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="pic" src={picture} alt="profile pic" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Eric Miller</h1>
                <p>My name is Eric Miller, I am a front end engineer with experience in, React<img src={logo} className="App-logo-mini" alt="logo" />, JavaScript, jQuery, Bootstrap, Sass, HTML5, and CSS3,<br /> I have a front end certification from freeCodeCamp(<a href='https://www.freecodecamp.org/certification/ericmiller777/legacy-front-end'>Here</a>), below are links to some of the projects I have worked on.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Projects</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>General Projects</a></li>*/}
                <li><a href="https://github.com/ericmiller777" target="_blank">Github</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Me</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
