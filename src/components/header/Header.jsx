import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/R5C_1851.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi. My name is</h5>
        <h1>Benjamin Babu</h1>
        {/*<h5 className="text-light">Fullstack Developer</h5>*/}
        {/* <CTA /> */}
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll__down'>Enter Portfolio</a>
      </div>
    </header>
  )
}

export default Header