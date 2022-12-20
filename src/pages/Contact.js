import React from 'react'
import ContactForm from '../components/ContactForm';
import classes from './Contact.module.css';

import { useState } from 'react';

const Contact = () => {

  const [isShow, setIsShow] = useState(true);
  

  
    function toggle(e) {
      setIsShow(!isShow);
      console.log( e.target.id);
      
    }

 

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We are here to help get your project out of the garage and back on the
        track. Reach out to one of our sales or support representitives for
        prompt service.
      </p>
      <button id={1} onClick={toggle}>Contact Us!</button> 
      
      <div className={classes.container}>
      
        <ContactForm isShow={isShow} dept1={'sales@prc.com'} dept2={'support@prc.com'} className={classes.contactForm} />
        
      </div>
    </div>
  );
}

export default Contact
