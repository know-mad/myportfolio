import React from 'react'
import './ContactForm.css'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <div id='contact-form'>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Full Name' type="text" name="name" value={name} onChange={this.handleChange} />

          <input placeholder='Email' type="email" name="email" value={email} onChange={this.handleChange} />

          <textarea placeholder='Message' name="message" value={message} onChange={this.handleChange} />

          <button type="submit">Send</button>

        </form>
        </div>
      );
    }
  }

  export default ContactForm
