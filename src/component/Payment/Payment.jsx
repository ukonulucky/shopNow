import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BasketItem from '../basketItems/BasketItem'
import "./Payment.css"


export default function Payment() {
  const navigate = useNavigate()
    const addedItem = useSelector(state => state.itemAdded)
    useEffect(() => {
   addedItem.length === 0 ? navigate('/') : navigate("/payment")
    }, [])
    
  
    
  const checkoutProduct = addedItem.map((i, j) => {
    return (
      <div key={j}>
            <BasketItem
                img={i.img}
                title={i.title}
                rating={i.rating}
                price={i.price}
                id={i.id} />
    </div> 
    )
  })
  return (
      <div className="payment">
          <div className="payment_wrapper">
              <h1>Checkout  
                   (<Link to="/checkout">
                      <span>
                      {addedItem?.length} {addedItem.length > 1 ? "items" : "item" }
                     </span>
                  </Link>
                   )

              </h1>
              <div className="payment__section">
                  {/* payment addredd */}
                  <div className="payment__title">
                      <h3>Delivery address</h3>
                  </div>
                  <div className="payment__address">
                      
                      <p>7 Saint Johnson Street</p>
                      <p>New York City Appolo</p>
                      <p>Europe Town</p>
                  </div>
              </div>
              <div className="payment__section">
                  <div className="payment__title">
                  <h3>Review Items and Delivery</h3>
                  </div>
                  <div className="payment__item">
                      {checkoutProduct}
                  </div>
              </div>
              <div className="payment__section"></div>
          </div>
    </div>
  )
}
