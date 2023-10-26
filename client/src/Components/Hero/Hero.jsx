import React from 'react'
import styles from './Hero.module.css'
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.heroHandIcon}>
            <p>New</p>
            <img src={hand} alt='Hand Image'/>
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.heroLatestBtn} >
          <div>Latest Collection</div>
          <img src={arrow} alt='Arrow' />
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  )
}
