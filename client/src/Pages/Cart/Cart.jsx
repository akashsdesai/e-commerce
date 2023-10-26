import React, { useState } from 'react'
import styles from './Cart.module.css'
import all_product from '../../Components/Assets/all_product'
import CartItem from '../../Components/CartItem/CartItem'

export default function Cart() {
  const [data,setData]=useState([15, 9])
  return (
    <div className={styles.container}>
      <h4>This part of the project is still under development</h4>
      {all_product.map((prev)=>{
        if(data.includes(prev.id)){
          return(
            <CartItem 
              image={prev.image}
              price={prev.new_price}
              name={prev.name}
            />
          )}
      })}
      <div className={styles.price}>
        <div className={styles.left}>
          <p>Total  Price</p>
          <hr />
          <p>Actual Price</p>
        </div>
        <div className={styles.right}>
          <h4>&#8377; 855</h4>
          <hr />
          <h4>&#8377; 1050</h4>
        </div>
      </div>
    </div>
  )
}
