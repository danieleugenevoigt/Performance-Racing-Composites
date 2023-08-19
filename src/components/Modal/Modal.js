import React from 'react'
import classes from './Modal.module.css';
import tireimg from '../../images/tireimg.png';
const Modal = ({ title, content } ) => {

  
  return (
    <div className={classes.container + ' ' + classes.modal}>
      <h1>{title}</h1>
      <p>{content}</p>
      <img
        src={tireimg}
        alt="auto parts"
      />
    </div>

  )
}

export default Modal
