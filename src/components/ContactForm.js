import React, { useState } from 'react'
import './ContactForm.css'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = () => {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
    message: ''
  })

  const handleChange = (e) => {
    const { value, name } = e.target

    setFullName((prevValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName,
          message: prevValue.message
        }
      } else if (name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value,
          message: prevValue.message
        }
      }  else if (name === 'message') {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          message: value
        }
      }
    })

  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...fullName })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    console.log(fullName)
  };



  return (
    <div id='contact-form'>
      <p style={{fontSize: '2rem', margin: '0'}}>Hello {fullName.fName} {fullName.lName}</p>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
       <input type="hidden" name="form-name" value="contact" />
        <input
          name='fName'
          placeholder='First Name'
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name='lName'
          placeholder='Last Name'
          value={fullName.lName}
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Message'
          value={fullName.message}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
