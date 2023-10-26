import React from 'react'
import styles from './NewCollections.module.css'

import data from '../Assets/new_collections'
import Item from '../Popular/Items/Items'
export default function NewCollections() {
  return (
    <div className={styles.newCollections}>
      <h2>NEW COLLECTIONS</h2>
      <hr />
      <div className={styles.container}>
        <div className={styles.items}>
          {data.map((item)=>{
            return(
            <Item 
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
            )
          })}
        </div>
      </div>
    </div>
  )
}
