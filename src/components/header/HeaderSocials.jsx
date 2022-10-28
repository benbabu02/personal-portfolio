import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/babubenjamin/' target="_blank"><BsLinkedin size={20}/></a>
        <a href='https://github.com/benbabu02' target="_blank"><FaGithub size={20}/></a>
    </div>
  )
}

export default HeaderSocials