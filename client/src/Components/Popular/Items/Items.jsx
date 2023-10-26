import React from 'react'
import styles from './Items.module.css'
import { Link } from 'react-router-dom'
export default function Item(props) {
  return (
    <Link style={{textDecoration: "none", color:"black"}} to={`/product/${props.id}`}><div className={styles.item}>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
      <div className={styles.itemPrice}>
        <div className={styles.itemPriceNew}>
        &#8377; {props.newPrice}
        </div>
        <div className={styles.itemPriceOld}>
        &#8377; {props.oldPrice}
        </div>
      </div>
    </div></Link>
  )
}
