import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bq79pk9', 'template_k04v0yr', form.current, '-mvzMpbtO_oWv3gkE')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <div className='contact__title'>
        <h2>Contact Me</h2>
      </div>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>benjaminbabu11@gmail.com</h5>
            {/* <a href="mailto:benjaminbabu11@gmail.com">Send a message</a> */}
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            {/* <h5>benjaminbabu11@gmail.com</h5> */}
            <a href='https://www.linkedin.com/in/babubenjamin/' target='_blank'>Let's Connect</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact