import  { React, useState }  from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Login(){
  const[data, setData]=useState({
    email:'',
    pwd:''
  })

  const [loginStatus, setLoginStatus]=useState({
    status:false
  })


  function handleChange(event){
    const {name, value} =event.target
    setData(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })}

    function handle(){
      axios.post('http://localhost:3002/login',
      {data:loginStatus.status}).then(()=>{
        alert('Welcome')
      })
    }

  function handleSubmit(){
    axios.post('http://localhost:3002/get',
    {data:data}).then((response)=>{
      setLoginStatus(response.data)
      console.log(response.data)
      if(response.data.status){
        alert('Login Succesfull')
      } else{
        alert('Login Failed')
      }  
    })
  }
  return (
    <div className={styles.container}>
    <h2>Login</h2>
    <div className={styles.inputs}>
      <input onChange={handleChange} name='email' type='Emial'  placeholder='Enter your Email'/>
      <input onChange={handleChange} name='pwd' type='password' placeholder='Enter Your Password' />
      {loginStatus.status ? null : <button onClick={handleSubmit}>Login</button>}
      {loginStatus.status ? <Link to='/'><button className='goto' onClick={handle}>Go to Home</button></Link>:null}
    </div>
  </div>
  )
}
