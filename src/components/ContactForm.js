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
    email: ''
  })

  const handleChange = (e) => {
    const { value, name, email } = e.target

    setFullName((prevValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lname: prevValue.lName,
          email: email
        }
      } else if (name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value,
          email: email
        }
      }
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...fullName })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };



  return (
    <div id='contact-form'>
      <p style={{fontSize: '2rem', margin: '0'}}>Hello {fullName.fName} {fullName.lName}</p>
      <form
        onSubmit={handleSubmit}
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
          value={fullName.email}
          onChange={handleChange}
        />
        <textarea name='message' placeholder='Message'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
