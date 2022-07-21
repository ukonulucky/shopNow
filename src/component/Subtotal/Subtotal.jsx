import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
  return (
      <div className="subtotal">
          <CurrencyFormat
              renderText={() => {
                  return (
                      <>
                          <p>
                              Subtotal (0 items):
                              <strong>0</strong>
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
              value={0}
              decimalScale={ 2}
          />
          <button>
              proceed to checkout
          </button>

         
  </div>
  )
}

export default Subtotal