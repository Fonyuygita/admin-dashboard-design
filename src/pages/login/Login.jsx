import React, { useState } from 'react'
import "./Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
const Login = () => {
  // create states
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState(false)

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
    </form>
    { error && <p>wrong user credentials</p> }

    </div>
  )
}

export default Login