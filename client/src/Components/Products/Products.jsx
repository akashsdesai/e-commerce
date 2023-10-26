import React from 'react'
import styles from './Products.module.css'
import star from '../Assets/star.png'
export default function Products(props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Home / Clothing / {props.category} Clothing</p>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={props.image} />
        </div>
        <div className={styles.right}>
          <h3>{props.name}</h3>
          <div className={styles.ratings}>
              4.2
              <img src={star} />
              <p>48.7K Ratings</p>
          </div>
          <hr/>
          <h3 >&#8377; <span >{props.newPrice}</span><span className={styles.oldPrice}> MRP &#8377; {props.oldPrice}</span></h3>
        </div>
      </div>
    </div>
  )
}


