import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from "./component/Checkout/Checkout";
import { store } from "./redux/state"
import {Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Header />
        <Routes>
      
          <Route exact path="/" element={
            <>
               <Home />
            </>
          } />
           <Route exact path="/checkout" element={
            <>
               <Checkout />
            </>
          } />
          <Route component={
            
               <h2>No route found</h2>
  
          } />
        </Routes>
      </div>
      </Router>
      </Provider>
  );
}

export default App;
