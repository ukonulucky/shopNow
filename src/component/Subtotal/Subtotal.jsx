import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';

function Subtotal() {


    const data = useSelector(state => state.itemAdded?.map((i,j) => {
       return  parseFloat(i.price)
    }))
    const total = data.reduce((prev,iniTial) => {
        return prev + iniTial
          }, 0)
    console.log("form subtotla", data)
console.log(total)
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
          <button>
              proceed to checkout
          </button>

         
  </div>
  )
}

export default Subtotal