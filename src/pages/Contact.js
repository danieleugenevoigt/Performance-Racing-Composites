import React from 'react'
import ContactForm from '../components/ContactForm';
import classes from './Contact.module.css';
import ProductForm from '../components/ProductForm';
import { useState } from 'react';

const Contact = () => {

  const [isShow, setIsShow] = useState(true);
  const [isShow2, setIsShow2] = useState(true);
  

  
    function toggle(e) {
      setIsShow(!isShow);
      console.log( e.target.id);
      
    }

    function toggle2(e) {
      setIsShow2(!isShow2);
      console.log( e.target.id);
      
    }

 

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We are here to help get your project out of the garage and back on the
        race track. Reach out to one of our sales or support representitives for
        prompt service.
      </p>
      <button id={1} onClick={toggle}>Contact Us!</button> 
      <button id={2} onClick={toggle2}>Add Product</button>
      
      <div className={classes.container}>
      
        <ContactForm isShow={isShow} className={classes.contactForm} />
        <ProductForm isShow2={isShow2}className={classes.ProductForm}/>
      </div>
    </div>
  );
}

export default Contact
