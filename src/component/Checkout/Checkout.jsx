import React from 'react'
import "./checkout.css"
import Subtotal from '../Subtotal/Subtotal'
import { useSelector } from 'react-redux';
import Product from '../product/Product.jsx';

function Checkout() {
  const addedItem = useSelector(state => state.itemAdded)
  console.log(addedItem)
  const checkoutProduct = addedItem.map((i, j) => {
    return (
      <div key={i.id}>
      <Product price={i.price} title={i.title} img={i.img} rating={i.rating}  />
    </div>
    )
  })

  return(
      <div className="checkout">
          <div className="checkout__left">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwfzJLPrIsEAvcjKkvmSyUT_03D_ISvFENQ&usqp=CAU" alt="advert" />
              <h2 className="checkout__title">
               Your Purchase   
              </h2>
        <div className="checkout__list">
          {addedItem.length > 0 ? (
             checkoutProduct
          ) : <h2>
          No item added
          </h2>}
            </div>
              
              
          </div>
          <div className="checkout__right">
              <Subtotal />
          </div>
          
    </div>
  )
}

export default Checkout