import React, { useContext, useState } from 'react'
import "./Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // create states
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState(false)
  const navigate=useNavigate();

// get our stuff from our context folder
const {dispatch}=useContext(AuthContext)
 


// create our handle login function here

const handleLogin=e=>{
  // prevent default reloading of page

  e.preventDefault();

  // login user using firebase
 console.log({
  email,
  password

 }); 

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // let us get our payload to our reducer using the dispatch from the context
    dispatch({
      type:"LOGIN",
      payload:user
    })
    navigate("/")
    // ...
  })
  .catch((error) => {
   setError(true)
  });



}


  return (
    <div className='login'>
    
    <form onSubmit={handleLogin}>
    <input type="email" name="" placeholder='email' onChange={e=>setEmail(e.target.value)} />
    <input type="password" name="" placeholder='password' onChange={e=>setPassword(e.target.value)} />
    <button type='submit'>Login</button>
    { error && <p>wrong user credentials</p> }

    </form>

    </div>
  )
}

export default Login