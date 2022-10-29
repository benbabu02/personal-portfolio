import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const changeBackground = () => {
    // console.log('scroll', activeNav, window.scrollY);

    if(window.matchMedia("(max-width: 600px)").matches) {
      // console.log('=============== max 600 px ================')
      if(window.scrollY >= 0 && window.scrollY <= 847) {
        setActiveNav('#');
      } else if (window.scrollY >= 848 && window.scrollY <= 2078) {
        setActiveNav('#about');
      } else if (window.scrollY >= 2079 && window.scrollY <= 3215) {
        setActiveNav('#skills');
      } else if (window.scrollY >= 3216 && window.scrollY <= 6069) {
        setActiveNav('#projects');
      } else if (window.scrollY >= 6070) {
        setActiveNav('#contact');
      }
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      // console.log('=============== max 1024 px ================')
      if(window.scrollY >= 0 && window.scrollY <= 833) {
        setActiveNav('#');
      } else if (window.scrollY >= 834 && window.scrollY <= 1974) {
        setActiveNav('#about');
      } else if (window.scrollY >= 1975 && window.scrollY <= 3074) {
        setActiveNav('#skills');
      } else if (window.scrollY >= 3075 && window.scrollY <= 4567) {
        setActiveNav('#projects');
      } else if (window.scrollY >= 4568) {
        setActiveNav('#contact');
      }
    } else {
      // console.log('=============== else ================')
      if(window.scrollY >= 0 && window.scrollY <= 799) {
        setActiveNav('#');
      } else if (window.scrollY >= 800 && window.scrollY <= 1499) {
        setActiveNav('#about');
      } else if (window.scrollY >= 1500 && window.scrollY <= 2099) {
        setActiveNav('#skills');
      } else if (window.scrollY >= 2100 && window.scrollY <= 3199) {
        setActiveNav('#projects');
      } else if (window.scrollY >= 3200) {
        setActiveNav('#contact');
      }
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav