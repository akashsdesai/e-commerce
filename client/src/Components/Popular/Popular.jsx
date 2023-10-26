import React from 'react'
import styles from './Popular.module.css'
import dataProduct from '../Assets/data'
import Item from './Items/Items'
export default function Popular() {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.popularItems}>
        {dataProduct.map(data=>{
          return<Item
            key={data.id}
            id={data.id}
            image={data.image}
            name={data.name}
            newPrice={data.new_price}
            oldPrice={data.old_price}
          />
        })}
      </div>
    </div>
  )
}
