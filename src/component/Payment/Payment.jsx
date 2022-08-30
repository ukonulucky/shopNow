import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import BasketItem from '../basketItems/BasketItem'
import Paystack from '../Paystack/Paystack'
import "./Payment.css"

import CurrencyFormat from 'react-currency-format';



export default function Payment() {
  const data = useSelector(state => state.itemAdded?.map((i,j) => {
    return  parseFloat(i.price)
  }))
  const total = data.reduce((prev,iniTial) => {
    return prev + iniTial
}, 0)
const [amount, setAmount] = useState(total)

  
const changeState = (value) => {
setAmount(value)
}


// useEffect(() => {
    
//     const total = data.reduce((prev,iniTial) => {
//         return prev + iniTial
//     }, 0)
// changeState(total)
// }, [total])

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
        <div className="payment__section">
        <div className="payment__title">
                  <h3>Payment Method</h3>
                  </div>
          <div className="payment__item">
            <div className="paystack">
             
             
<CurrencyFormat
              renderText={(amount) => {
                  return (
                      <>
                      <h3> Order Total:
                     <strong>
                        {amount}
                        </strong>
                        </h3> 
                      </>

                  )
                  
              }}
              thousandSeparator={true}
              prefix={"#"}
              displayType={"text"}
              value={amount}
              decimalScale={2}
/>
              <Paystack />
          </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
