import React, { useState } from 'react'
import styles from './navbar.module.css'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import ham from '../Assets/ham.png'
import cancel from '../Assets/cancel.png'

export default function Navbar() {
  const [active , setActive]=useState("shop")
  const [checkHam, setHam]=useState(false)


 
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link style={{textDecoration: 'none'}} to='/'><img onClick={()=>{setActive('shop')}} src={logo} alt='logo' /></Link>
      </div>
      <div className={styles.ham} onClick={()=>{
        setHam(!checkHam)
      }}>
        <img src={checkHam ? cancel: ham} />
      </div>
      <div className={`${styles.navMenu} ${checkHam && styles.hold}`}>
        <ul className={styles.navMenuItems} onClick={()=>{setHam(!checkHam)}}>
          <li onClick={()=>{setActive('shop')}}><Link style={{textDecoration: 'none', color:'black'}} to='/'>Shop</Link>{active==='shop' && <hr/>}</li>
          <li onClick={()=>{setActive('men')}}><Link style={{textDecoration: 'none' , color:'black'}} to='/men'>Men</Link>{active==='men' && <hr/>}</li>
          <li onClick={()=>{setActive('women')}}><Link style={{textDecoration: 'none' , color:'black'}} to='/women'>Women</Link>{active==='women' && <hr/>}</li>
          <li onClick={()=>{setActive('kids')}}><Link style={{textDecoration: 'none' , color:'black'}} to='/kids'>Kids</Link>{active==='kids' && <hr/>}</li>
        </ul>
        <div className={styles.navLoginCart}>
          <Link style={{textDecoration: 'none'}} to='/login'><button onClick={()=>{setHam(!checkHam)}}>Account</button></Link>
          <Link style={{textDecoration: 'none'}} to='/cart'><img onClick={()=>{setHam(!checkHam)}} src={cartIcon} alt='cart' /></Link>
          <div className={styles.count}>0</div>
        </div>
      </div>
    </nav>
  )
}
