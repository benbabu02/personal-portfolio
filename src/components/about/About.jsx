import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.jpeg'
import Resume from '../../assets/cv.pdf'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import MP1 from '../../assets/mp5_new.jpg'
import MP2 from '../../assets/mp4_new.jpeg'
import MP3 from '../../assets/mp3_new.jpeg'

const About = () => {
  return (
    <section id='about'>
      <div className='about__title'>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <img src={MP1}/>
              {/* <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small> */}
            </article>
            <article className='about__card'>
              <img src={MP2}/> 
              {/* <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small> */}
            </article>
            <article className='about__card'>
              <img src={MP3}/>
              {/* <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small> */}
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a, pariatur repellendus enim ipsam nostrum, assumenda ea tenetur delectus exercitationem temporibus in, quod tempora minima doloribus earum tempore accusamus non.
          </p>

          <div className="cta">
            <a href={Resume} className='btn' target='_blank'>Résumé</a>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About