import React from 'react'
import styles from './Offer.module.css'
import offerImage from '../Assets/exclusive_image.png'
export default function Offer() {
  return (
    <div className={styles.offers}>
      <div className={styles.left}>
        <h2>Exclusive</h2>
        <h2>Offers for You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className={styles.right}>
        <img src={offerImage} />
      </div>
    </div>
  )
}
