import React from 'react'
import Star from '@mui/icons-material/Star';
import "./basketItem.css"
import { useDispatch } from 'react-redux';
import {removeFromBasket} from "../../redux/action"

function BasketItem({ img, title, rating , price , id} ) {
  const dispatch =  useDispatch()
  return (
      <div className="Basket">
          <div className="basket__left">
              <img src={ img } alt="product" />
          </div>
          <div className="basket__right">
              <h2>{ title }</h2>
             
              <div className="basket__price">
                  #{ price }
              </div>
              <div className="basket__star">
              {Array(rating).fill().map((i,j) => {
                  return <span key={ j }>{ <Star /> }</span>
              })}
             </div>
              <button onClick={() => {
                  dispatch(removeFromBasket({
                   id, img , title, rating, price
               }))
              }}>
                  Remove From Basket
              </button>
          </div> 
    </div>
  )
}

export default BasketItem