import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.jpeg'
import Resume from '../../assets/cv.pdf'
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
              <div className="about__card-image">
                <img src={MP1}/>
              </div>
            </article>
            <article className='about__card'>
            <div className="about__card-image">
                <img src={MP2}/>
              </div>
            </article>
            <article className='about__card'>
            <div className="about__card-image">
                <img src={MP3}/>
              </div>
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
            {/* <a href={Resume} className='btn' target='_blank'>Résumé</a> */}
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About