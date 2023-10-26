import React, { useEffect, useState } from 'react'
import Login from '../../Components/Login/Login'
import Signup from '../../Components/SignUp/Signup'
import styles from './LoginSignup.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function LoginSignup() {
  const [check, setCheck]=useState({
    active:false,
    login:'Dont have a Account Click to Create Account',
    signup:'Click to Login',
    loginBtn:'Login',
    signupBtn:'Sign Up'
  })

  const[login,setLogin]=useState({
    status:false
  })

  function handleSubmit(){
    setCheck(prev=>{
      return{
        ...prev,
        active:!check.active
      }
    })
  }
  useEffect(()=>{
    handle()
  },[])


  function handle(){
    axios.get('http://localhost:3002/check').then((response)=>{
      console.log(response.data)
      setLogin(response.data)
    })
  }

  function handleClick(){
    setLogin({status:true})
    axios.post('http://localhost:3002/login',
    {data:false}).then(()=>{
        alert('Come Back!')
      })
  }
  return (
    <div className={styles.container} >
      <div className={styles.box}>
        {login.status ?  <Link to='/'><button className={styles.logout} onClick={handleClick}>Log Out</button></Link> : (check.active ? <Login />: <Signup />)}
      </div>
      {login.status ? null : <div className={styles.btn}>
        {check.active ? <label>{check.login}</label>:<label>{check.signup}</label>}
        <button id='holder' onClick={handleSubmit}>{check.active ?  check.signupBtn:check.loginBtn}</button>
      </div>}
    </div>
  )
}
