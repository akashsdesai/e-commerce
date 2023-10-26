import React from 'react'
import logo from '../Assets/logo.png'
import insta from '../Assets/instagram_icon.png'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div className={styles.footer}> 
      <img src={logo} />
      <ul className={styles.barnd}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <hr />
      <div className={styles.contact}>
        <a href='' target='_blank'><img src={insta} /></a>
      </div>
    </div>
  )
}
