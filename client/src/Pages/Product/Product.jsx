import React from 'react'
import { useParams } from 'react-router-dom'
import allProduct from '../../Components/Assets/all_product'
import Products from '../../Components/Products/Products'
import styles from './Product.module.css'
export default function Product() {
  const {productId}=useParams()
  function handleClick(){
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {allProduct.map((item)=>{
          if(Number(productId)===item.id){
            return(
              <Products
                id={item.id}
                category={item.category}
                image={item.image}
                name={item.name}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            )
          }
        })}
      </div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}
