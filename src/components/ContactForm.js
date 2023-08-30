import classes from './ContactForm.module.css';
import { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ContactForm = (props) => {
  const navigate = useNavigate();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();
  
  const [inputs, setInputs] = useState({});   
    
function handleSubmit(event) {
  event.preventDefault();

  const enteredFirstName = firstNameInputRef.current.value;
  const enteredLastName = lastNameInputRef.current.value;
  const enteredPhoneNumber = phoneNumberInputRef.current.value;
  const enteredEmail = emailInputRef.current.value;
  const enteredDescription = descriptionInputRef.current.value;

  const formData = {
    first: enteredFirstName,
    last: enteredLastName,
    phone: enteredPhoneNumber,
    email: enteredEmail,
    description: enteredDescription,
  };

  fetch(
  "https://performance-racing-composites-default-rtdb.firebaseio.com/formdata.json",
    { 
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(()=>{
    navigate('/home',{replace:true});
  });

  console.log('function ran');
  
}



  return (
    <div>
      <form id="contactForm" className={props.isShow ? classes.hide : ""} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='fname'>First Name </label>
          <input
            type='text'
            required id='first'
            ref={firstNameInputRef}
          />
        </div>
        <div>
          <label htmlFor='lname'>Last Name </label>
          <input
            type='text'
            required id='last'
            ref={lastNameInputRef}
          />
        </div>
        <div>
          <label htmlFor='tele' placeholder='123-456-7890'>
            Telephone Number{" "}
          </label>{" "}
          <input
            type='number'
            required id='phone'
            ref={phoneNumberInputRef}
          />
        </div>
        <label htmlFor='email' placeholder='name@address.com'>
          Email Address{" "}
        </label>{" "}
        <input
          type='text'
          required id='email'
          ref={emailInputRef}
        />
        <div>
          <label htmlFor='description'>How Can We Help? </label>
          <input
            id='description'
            rows='5'
            ref={descriptionInputRef}
          />
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}

export default ContactForm
