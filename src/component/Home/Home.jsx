import React from 'react'
import "./home.css"
import backgroundPic from "../../utils/images/large-1.jpg"
import watch from "../../utils/images/watch.png"
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
              <Product title="SUPCASE [Unicorn Beetle Pro] Series Case for Galaxy Watch 4 Classic [46mm] 2021 Release, Rugged Protective Case with Strap Bands"
                  price="15000"
                  rating={5}
                  img={ watch }
              />
              <Product title="SUPCASE [Unicorn Beetle Pro] Series Case for Galaxy Watch 4 Classic [46mm] 2021 Release, Rugged Protective Case with Strap Bands"
                  price="15000"
                  rating={5}
                  img={ watch }
              />
            
          </div>
          <div className="home__row">
              
          </div>
          <div className="home__row"></div>
    </div>
  )
}

export default Home