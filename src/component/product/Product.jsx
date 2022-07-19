import React from 'react'
import Star from '@mui/icons-material/Star';
import "./product.css"


function Product({ title, price, rating, img}) {
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
          <button>
             add to basket
          </button>
    </div>
  )
}

export default Product