import React from 'react'
import "./subtotal.css"

import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Paystack from '../Paystack/Paystack';

function Subtotal() {

 const navigate = useNavigate()
    const data = useSelector(state => state.itemAdded?.map((i,j) => {
       return  parseFloat(i.price)
    }))
    const total = data.reduce((prev,iniTial) => {
        return prev + iniTial
    }, 0)
    
  return (
      <div className="subtotal">
          <CurrencyFormat
              renderText={(value) => {
                  return (
                      <>
                          <p>
                              Subtotal ({data.length} {
                                  data.length > 1 ? "items" :"item"
                              }):
                              <strong>{ value }</strong>
                          </p>
                          <small className="subtotal__gift">
                              <input type="checkbox" />
                              <span>
                                  This order Contains a gift
                              </span>
                          </small>
                      </>

                  )
                  
              }}
              thousandSeparator={true}
              prefix={"#"}
              displayType={"text"}
              value={total}
              decimalScale={ 2}
          />
          <button onClick={() => {
            navigate("/payment")
          }} >
             Proceed To Checkout
          </button>

         
  </div>
  )
}

export default Subtotal