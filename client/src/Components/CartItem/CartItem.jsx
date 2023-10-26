import React from 'react'
import styles from './CartItem.module.css'
export default function CartItem(props) {
  return (
    <div className={styles.container}>
     <img src={props.image} />
     <p>{props.name}</p>
     <h4>&#8377; {props.price}</h4>
    </div>
  )
}
