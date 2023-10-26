import React from 'react'
import allData from '../../Components/Assets/all_product'
import Item from '../../Components/Popular/Items/Items'
import styles from './ShopCategory.module.css'
export default function ShopCategory(props) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={props.banner} />
      </div>
      <div className={styles.index}>
        <p>
          <span style={{fontWeight:'bold'}}>Showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className={styles.holder}>
      <div className={styles.content}>
        {allData.map((item)=>{
          if(props.category===item.category){
            return(
              <Item 
              category={item.category}
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
              />
            )
          }
          else{
            return null
          }
        })}
      </div>
      </div>
    </div>
  )
}
