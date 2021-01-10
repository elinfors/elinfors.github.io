import React, {useState, useEffect} from 'react'

const Contact = () => {
    return(
    <form method="POST">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
  
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
  
      <label htmlFor="message">Message</label>
      <textarea name="message" rows="3"></textarea>
  
      <input type="submit" />
    </form>
    )
    }
  export default Contact;