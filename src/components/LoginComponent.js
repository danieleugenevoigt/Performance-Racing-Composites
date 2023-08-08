import { useState, useEffect } from 'react';
import classes from './LoginComponent.module.css';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../components/firebaseConfig';

const LoginComponent = () => {
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [user, setUser] = useState({});

/*onAuthStateChanged(auth,(currentUser)=> {
    setUser(currentUser);
})*/

useEffect(
  ()=>onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)})
  ,[]);

const register = async ()=>{
  try{
  const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  {document.getElementById('registerEmail').value=''}
  {document.getElementById('registerPassword').value=''}
  } catch (error){
    console.log(error.message)
  }
}

const login = async ()=>{
    try{
        const user  =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        {document.getElementById('loginEmail').value=''}
        {document.getElementById('loginPassword').value=''}
        console.log(user);
        } catch (error){
          console.log(error.message)
        }
       
}

const logout = async ()=>{
  await signOut(auth);
}


  return (
    <div className={classes.loginContainer}>

      <div> 
        <h3>Register User</h3>
        <input placeholder='Email...' id='registerEmail' onChange = {(event) =>{
          setRegisterEmail(event.target.value);
        }} />
        <input placeholder='Password...' id='registerPassword' onChange = {(event) =>{
          setRegisterPassword(event.target.value);
        }}  />
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input placeholder='Email...' id='loginEmail' onChange = {(event) =>{
          setLoginEmail(event.target.value);
        }} />
        <input placeholder='Password...' id='loginPassword' onChange = {(event) =>{
          setLoginPassword(event.target.value);
        }}  />
        <button onClick={login}>Login</button>
      </div>

      <div>
        <h4>User Logged In :   <br></br>
        {user ? user.email:"User Not Logged In"} 
        </h4>
        <button onClick={logout}>Sign Out</button>
      </div>

    </div>
  )
}

//

export default LoginComponent;
