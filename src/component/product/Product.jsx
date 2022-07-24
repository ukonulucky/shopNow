import React from 'react'
import Star from '@mui/icons-material/Star';
import "./product.css"
import { addToBasket }  from "../../redux/action"
import { useDispatch, useSelector } from "react-redux"


function Product({ title, price, rating, img, id }) {
  const dispatch = useDispatch()
  const cart = useDispatch(state => state.cart)
  return (
      <div className="product">
          <div className="product__info">
              <p className="product__title">
            {title}
              </p>
              <p className="product__price">
                  <span>#</span>
                  <small>{price}</small>
              </p>
              
                  {Array(rating).fill().map((_,i) => {
                      return <span key={ i }>{ <Star />}</span>
               })}
            
          </div>
          <img src={img} alt="watch" />
      <button onClick={() => {
        dispatch(addToBasket({
          title, price, rating, img , id
        }))
        
          }}>
             add to basket
          </button>
    </div>
  )
}

export default Product