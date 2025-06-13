import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.jpeg'
import Resume from '../../assets/Benjamin_Babu_Resume.pdf'
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
            Hey! My name is Benjamin, I'm a recent computer science graduate from the University
            at Albany who has a passion for building cool things with code. I've worked on a wide
            range of projects, from simulating a computer processor in Java to creating interactive
            games and tools with JavaScript and Python.
          </p>
          <p>
            At UAlbany, I served as the Manager of the IEEE Computer Society, where I helped grow the
            organization through events, hackathons, and hands-on workshops. I focused on promoting
            computer science on campus and creating opportunities for students to explore tech,
            collaborate and build real-world skills.
          </p>
          <p>
            I enjoy solving problems, learning new frameworks, and making tech more creative and
            accessible. I'm also into photography! I love capturing beautiful and interesting places
            through a lens.
          </p>
          <p>
            Feel free to check out my résumé or photography page below, or scroll down to see what
            I've been working on!
          </p>

          <div className="cta">
            <a href={Resume} className='btn btn-primary' target='_blank'>Resume</a>
            <a href="https://www.instagram.com/bensframed/" className='btn' target='_blank'>Photography Instagram</a>
            {/* <a href='#contact' className='btn btn-primary'>Contact Me</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About