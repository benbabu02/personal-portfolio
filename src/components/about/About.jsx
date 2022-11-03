import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.jpeg'
import Resume from '../../assets/cv.pdf'
import photos from '../contact/Contact'
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
        <h2>About Meeeee</h2>
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
              <div className="about__card-image">
                <img src={MP1}/>
              </div>
              {/* <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small> */}
            </article>
            <article className='about__card'>
            <div className="about__card-image">
                <img src={MP2}/>
              </div>
              {/* <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small> */}
            </article>
            <article className='about__card'>
            <div className="about__card-image">
                <img src={MP3}/>
              </div>
              {/* <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small> */}
            </article>
          </div>

          <p>
            Hey! My name is Benjamin, I am a student at the University of Toronto pursuing a degree
            in computer science. I have been learning about programming since my sophomore year in
            high school. I am interesting in identifying solutions to complex problems and developing
            new ideas using code. I spend my leisure time playing piano or drums (depending on the mood),
            taking photos, and exploring the city.
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