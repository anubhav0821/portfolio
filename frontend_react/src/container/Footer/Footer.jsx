import React, { useState} from 'react'
import {images} from '../../constants'
import { AppWrap, MotionWrap} from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]:value});
  }

  const handleSubmit = () => {
    setLoading(true);


    const contact ={
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err))
  }


  return (
    <>
      <h2 className='head-text'>
        Chat with me
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anubhav.exp0821@gmail.com' target='_blank' className='p-text' >anubhav.exp0821@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel: +91 895-798-7387' className='p-text' >+91 895-798-7387</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className='app__footer-form app__flex' >
        <div className='app__flex'>
          <input className='p-text' tyle='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' tyle='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput} />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touvh with me!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
   'contact',
   'app__whitebg')