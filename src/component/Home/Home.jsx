import React from 'react'
import "./home.css"
import {useSelector} from "react-redux"

// images imported
import backgroundPic from "../../utils/images/large-1.jpg"
import watch from "../../utils/images/watch.png"
import shoe from "../../utils/images/shoe.png"
import bag from "../../utils/images/large-1.jpg"
import cloth from "../../utils/images/cloth.jpg"
import fridge from "../../utils/images/fridge.png"
import schoolBag from "../../utils/images/schoolbag.jpg"
import television from "../../utils/images/tele2.jpeg"
// components
import Product from '../product/Product'

function Home() {
    const state = useSelector(state => state)
   
    const cart = state.users?.map((i,j) => {
        return <div key={i.id}>
            <Product title={i.title}
            price={i.price}
            rating={i.rating}
            id= { i.id }
            img={i.img} />
            
            </div>
    })

  return (
      <div className="home__container">
        
          <img
              className="home__background"
              src={backgroundPic} alt="background" />
          <div className="home__row">
              {/* <Product title="SUPCASE [Unicorn Beetle Pro] Series Case for Galaxy Watch 4 Classic [46mm] 2021 Release, Rugged Protective Case with Strap Bands"
                  price="15000"
                  rating={5}
                  img={watch}
                  id= { i.id }
              />
              <Product title="A4 Fashion Hollow Breathable Business Leather Shoes-866 Black Hollow"
                  price="15000"
                  rating={5}
                  img={shoe}
                  id= { i.id }
              /> */}
              {cart.splice(0,2)}
            
            
          </div>
          <div className="home__row">
          {/* <Product title="SHARE THIS PRODUCT Backpack Waterproof Shoulder Bag For Men, Multifunctional Short Travel Accessory Bag With Lock"
                  price="15000"
                  rating={5}
                  img={schoolBag}
                  id= { i.id }
              />
                <Product title="RCA RFR741-BLACK Apartment Size-Top Freezer-2 Door Fridge-Adjustable Thermostat Control-Black-7.5 Cubic Feet"
                  price="69,990"
                  rating={4}
                  img={fridge}
                  id= { i.id }
              />
               <Product title="Chrysolite Designs Super Numbers Casual Polo Bundle - Wine, Grey, Navyblue, Red."
                  price="11,095"
                  rating={5}
                  img={cloth}
                  id= { i.id }
              /> */}
              
              { cart.slice(2,5)}
          </div>
          <div className="home__row">
          {/* <Product title="SHARE THIS PRODUCT Polystar 40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL"
                  price="133,000"
                  rating={5}
                  img={television}
                  id= { i.id }
              /> */}
              {cart.slice(5,6)}
          </div>
    </div>
  )
}

export default Home