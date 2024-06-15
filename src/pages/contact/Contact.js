import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt,FaLinkedin,FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Contact.css'
import { FiSend } from 'react-icons/fi'
const Contact = () => {
  return (
    <section className="contact section">
            <h2 className="section_title">Get In <span>Touch</span></h2>

            <div className="contact__container container grid">
              <div className="contact__data">
                <h3 className="contact__title">Don't be Shy !</h3>

                <p className="contact__description">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                <div className="contact__info">
                  <div className="info__item">
                    <FaEnvelopeOpen className='info__icon'/>

                    <div>
                      <span className="info__title">Mail me </span>
                      <h4 className="info__desc">jaspreetsingh44555@gmail.com</h4>
                    </div>
                  </div>

                  <div className="info__item">
                    <FaPhoneSquareAlt className='info__icon'/>

                    <div>
                      <span className="info__title">Call me </span>
                      <h4 className="info__desc">+919817048588</h4>
                    </div>
                  </div>
                </div>

                <div className="contact__socials">
                  <a href="https://github.com/Jaspreet000" className="contact__social-link">
                    <FaGithub/>
                  </a>

                  <a href="https://www.linkedin.com/in/jaspreet-singh-9806b1296/" className="contact__social-link">
                    <FaLinkedin/>
                  </a>

                  <a href="https://www.instagram.com/__._jass_i_.__/" className="contact__social-link">
                    <FaInstagram/>
                  </a>

                  <a href="https://x.com/Jaspreeeeeeeet" className="contact__social-link">
                    <FaTwitter/>
                  </a>
                </div>
              </div>

              <form className="contact__form" action="https://getform.io/f/ebpdqvnb" method="POST">

                <div className="form__input-group">
                  <div className="form__input-div">
                    <input
                     type="text"
                     placeholder='Your Name'
                     className='form__control'
                     name="namee"
                     id="namee"
                     />
                  </div>

                  <div className="form__input-div">
                    <input
                     type="email"
                     placeholder='Your Email'
                     className='form__control'
                     name="email"
                     id="email"
                     />
                  </div>

                  <div className="form__input-div">
                    <input
                     type="text"
                     placeholder='Your Subject'
                     className='form__control'
                     name="subject"
                     id="subject"
                     />
                  </div>
                </div>

                <div className="form__input-div">
                    <textarea
                     placeholder='Your Message'
                     className="form__control textarea"
                     name="message"
                     id="message"
                     ></textarea>
                  </div>

                  <button type="submit" className='button'>
                    Send Message
                    <span className='button__icon contact__button-icon'>
                      <FiSend/>
                    </span>
                  </button>
              </form>
            </div>
    </section>
  )
}

export default Contact
