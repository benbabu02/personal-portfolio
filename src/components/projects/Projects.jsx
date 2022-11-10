import React from 'react'
import './projects.css'
import IMG1 from '../../assets/LinAlgCalcProject.png'
import IMG2 from '../../assets/mywebsite.png'
import IMG3 from '../../assets/virtualfittingroom.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Linear Algebra Calculator',
    text: 'this is text',
    github: 'https://github.com/benbabu02/LinearAlgebraCalculator',
    demo: 'https://www.youtube.com/watch?v=XB2V_Bn1J_E'
  },
  {
    id: 2,
    image: IMG2, 
    title: 'Personal Website',
    text: 'this is text',
    github: 'https://github.com/benbabu02/my-website',
  },
  {
    id: 3,
    image: IMG3, 
    title: 'Virtual Fitting Room',
    text: 'this is text',
    github: 'https://github.com/benbabu02/virtual-fitting-room',
  },
  {
    id: 4,
    image: IMG4, 
    title: 'Rock Paper Scissors',
    text: 'this is text',
    github: 'https://github.com/benbabu02/rock-paper-scissors',
    demo: 'https://github.com'
  },
  // {
  //   id: 5,
  //   image: IMG5, 
  //   title: 'Project Name',
  //   text: 'this is text',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6, 
  //   title: 'Project Name',
  //   text: 'this is text',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // }
]

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects__title'>
        <h2>Projects</h2>
      </div>

      <div className='container projects__container'>
        {
          data.map(({id, image, title, text, github, demo}) => {
            if (demo) {
              return (
                <article key={id} className='projects__item'>
                  <div className="projects__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  {/* <h5>{text}</h5> */}
                  <div className="projects__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
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
                  {/* <h5>{text}</h5> */}
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