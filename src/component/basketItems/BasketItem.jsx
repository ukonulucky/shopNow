import React, { useState} from 'react'
import Star from '@mui/icons-material/Star';
import "./basketItem.css"
import { useDispatch } from 'react-redux';
import {removeFromBasket} from "../../redux/action"
import {useTransition, animated } from "react-spring"
import { isVisible } from '@testing-library/user-event/dist/utils';
function BasketItem({ img, title, rating, price, id }) {
    const { isVisible, setIsvisible} = useState(true)
    const dispatch = useDispatch()
    const transition = useTransition(isVisible, {
        from: {},
        enter: {top:0, left : 0, opacity:1},
        leave: {top:0, left : 400, opacity:0}
    })
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