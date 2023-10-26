import React, { useState } from 'react'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
export default function Signup() {
  const[data, setData]=useState({
    email:'',
    pwd:'',
    rpwd:''
  })

  function handleChange(event){
    const {name, value} =event.target
    setData(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  function handleSubmit(){
    if(data.pwd===data.rpwd){
      Axios.post('http://localhost:3002/reg',
      {data:data}).then(()=>{
        alert('Account Created')
      })
    }
    else{
      alert("Password didn't Match")
    }
  }
  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <div className={styles.inputs}>
        <input onChange={handleChange} name='email' type='Emial'  placeholder='Enter your Email'/>
        <input onChange={handleChange} name='pwd' type='password' placeholder='Enter Your Password' />
        <input onChange={handleChange} name='rpwd' type='password' placeholder='Re-enter Your Password' />
        {(data.pwd===data.rpwd) ? null: <p style={{color:'red', marginTop:'-14px', fontSize:'14px'}}>Password didn't match</p> }
        <Link to='/'><button onClick={handleSubmit}>Create Account</button></Link>
      </div>
    </div>
  )
}
