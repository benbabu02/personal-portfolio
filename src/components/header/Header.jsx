import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/R5C_1851.jpg'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hi. My name is</h5>
        <h1>Benjamin Babu</h1> */}
        {/*<h5 className="text-light">Fullstack Developer</h5>*/}
        {/* <CTA /> */}

        <div className='container text-lines'>
          <span className='text-line'>
            <h1>Hi! I am Benjamin,</h1>
          </span>
        </div>
        <br/>
        <div className='container text-lines'>
          <span className='text-line'>
            <h1>and I make</h1>
          </span>
        </div>
        <br/>
        <div className='container text-lines'>
          <span className='text-line'>
            <h1>
              <TypeAnimation
                sequence={[
                  500,
                  'code',
                  1000,
                  'bugs',
                  1000,
                  'bad decisions :)',
                  1000,
                  'stuff.',
                ]}
                wrapper="span"
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </h1>
          </span>
        </div>

        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#about" className='scroll__down'>Enter Portfolio</a>
      </div>
    </header>
  )
}

export default Header