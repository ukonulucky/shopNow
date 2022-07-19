import React from 'react'
import "./home.css"
import backgroundPic from "../../utils/images/large-1.jpg"
import watch from "../../utils/images/watch.png"
import shoe from "../../utils/images/shoe.png"
import bag from "../../utils/images/large-1.jpg"
import cloth from "../../utils/images/cloth.jpg"
import fridge from "../../utils/images/fridge.png"
import schoolBag from "../../utils/images/schoolbag.jpg"
import television from "../../utils/images/tele2.jpeg"
import Product from '../product/Product'
function Home() {
  return (
      <div className="home__container">
        
          <img
              className="home__background"
              src={backgroundPic} alt="background" />
          <div className="home__row">
              <Product title="SUPCASE [Unicorn Beetle Pro] Series Case for Galaxy Watch 4 Classic [46mm] 2021 Release, Rugged Protective Case with Strap Bands"
                  price="15000"
                  rating={5}
                  img={ watch }
              />
              <Product title="A4 Fashion Hollow Breathable Business Leather Shoes-866 Black Hollow"
                  price="15000"
                  rating={5}
                  img={ shoe }
              />
            
            
          </div>
          <div className="home__row">
          <Product title="SHARE THIS PRODUCT Backpack Waterproof Shoulder Bag For Men, Multifunctional Short Travel Accessory Bag With Lock"
                  price="15000"
                  rating={5}
                  img={ schoolBag }
              />
                <Product title="SHARE THIS PRODUCT Backpack Waterproof Shoulder Bag For Men, Multifunctional Short Travel Accessory Bag With Lock"
                  price="15000"
                  rating={5}
                  img={ fridge }
              />
               <Product title="Chrysolite Designs Super Numbers Casual Polo Bundle - Wine, Grey, Navyblue, Red."
                  price="11,095"
                  rating={5}
                  img={ cloth }
              />
              
          </div>
          <div className="home__row">
          <Product title="SHARE THIS PRODUCT Polystar 40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL"
                  price="133,000"
                  rating={5}
                  img={ television}
              />
          </div>
    </div>
  )
}

export default Home