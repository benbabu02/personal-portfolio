import React from 'react'
import './projects.css'
import LinAlgCalcImg from '../../assets/LinAlgCalcProject.png'
import MyWebImg from '../../assets/mywebsite.png'
import VirFitRoomImg from '../../assets/virtualfittingroom.png'
import RPSGameImg from '../../assets/rpsgame.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 6,
    image: IMG5, 
    title: 'Computer Processor Simulator',
    text: 'Languages: Java',
    github: 'https://github.com',
    demo: 'https://github.com'

  },
  {
    id: 5,
    image: IMG5, 
    title: 'AWK Interpreter',
    text: 'Languages: Java',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: MyWebImg, 
    title: 'Personal Website',
    text: 'Languages: ReactJS, CSS',
    github: 'https://github.com/benbabu02/my-website',
  },
  {
    id: 3,
    image: LinAlgCalcImg, 
    title: 'Linear Algebra Calculator',
    text: 'Languages: Python',
    github: 'https://github.com/benbabu02/LinearAlgebraCalculator',
    video: 'https://www.youtube.com/watch?v=XB2V_Bn1J_E'
  },
  {
    id: 2,
    image: RPSGameImg, 
    title: 'Rock Paper Scissors',
    text: 'Languages: HTML, CSS, JavaScript',
    github: 'https://github.com/benbabu02/rock-paper-scissors',
    // demo: 'https://github.com'
    game: "/rock-paper-scissors/rps.html",
  },
  {
    id: 1,
    image: VirFitRoomImg, 
    title: 'Virtual Fitting Room',
    text: 'Languages: HTML, CSS, JavaScript',
    github: 'https://github.com/benbabu02/virtual-fitting-room',
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects__title'>
        <h2>Projects</h2>
      </div>

      <div className='container projects__container'>
        {
          data.map(({id, image, title, text, github, video, game}) => {
            if (video) {
              return (
                <article key={id} className='projects__item'>
                  <div className="projects__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h5>{text}</h5>
                  <div className="projects__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={video} className='btn btn-primary' target='_blank'>Demo</a>
                  </div>
                </article>
              )
            } else if (game) {
              return (
                <article key={id} className='projects__item'>
                  <div className="projects__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h5>{text}</h5>
                  <div className="projects__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={game} className='btn btn-primary' target='_blank'>Play Game</a>
                  </div>
                </article>
              )
            } else {
              return (
                <article key={id} className='projects__item'>
                  <div className="projects__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h5>{text}</h5>
                  <div className="projects__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>
                </article>
              )
            }
          })
        }
      </div>
    </section>
  )
}

export default Projects