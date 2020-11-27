import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  })

  const handleChange = (e) => {
    const {value, name} = e.target

    setFullName((prevValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lname: prevValue.lName
        }
      } else if (name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }



  return (
    <div id='contact-form'>
      <p style={{fontSize: '2rem', margin: '0'}}>Hello {fullName.fName} {fullName.lName}</p>
      <form
        name='contact-form'
        method='POST'
        data-netlify="true"
      >
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
        <input
          type="email"
          name="email-inputted"
          placeholder="Email"
        />
        <textarea name='message' placeholder='Message'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
