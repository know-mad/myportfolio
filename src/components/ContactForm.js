import React, { useState } from 'react'
import './ContactForm.css'
import { navigate } from "gatsby"


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = () => {
  const [fullName, setFullName] = useState({
    fName: '',
    tel: '',
    mail: '',
    message: ''
  })

  const handleChange = (e) => {
    const { value, name } = e.target

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })

  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...fullName })
    })
      .then(() => navigate("/contact/success"))
      .catch(error => alert(error));

    e.preventDefault();
    // console.log(fullName)
  };



  return (
    <div className='contact-form'>

      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>Thanks {fullName.fName}</p>

       <input type="hidden" name="form-name" value="contact" />
        <input
          name='fName'
          placeholder='Full Name'
          value={fullName.fName}
          onChange={handleChange}
          maxLength="25"
          required
        />
        <input
          name='mail'
          placeholder='E-Mail'
          value={fullName.mail}
          onChange={handleChange}
          maxLength="50"
          required
        />

        <input
          name='tel'
          placeholder='Telephone'
          maxLength="15"
          value={fullName.tel}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Brief project description'
          value={fullName.message}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
