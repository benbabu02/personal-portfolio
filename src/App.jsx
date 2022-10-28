import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
// import Services from './components/services/Services'
import Projects from './components/projects/Projects'
// import Photos from './components/photos/Photos'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      {/* <Services/> */}
      <Projects/>
      {/* <Photos/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App