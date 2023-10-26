import React, { useState } from 'react'
import styles from './NewsLetter.module.css'
export default function NewsLetter() {
  const [emial, setEmail]=useState('')
  function handleChange(event){
    setEmail(event.target.value)
  }
  return (
    <div className={styles.newsLetter}>
      <div className={styles.container}>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className={styles.holder}>
          <input onChange={handleChange} type='email' placeholder='Your email id' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
