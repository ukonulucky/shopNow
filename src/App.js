import { FirebaseApp } from "../src/firebase";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from "./component/Checkout/Checkout";
import { store } from "./redux/state"
import {Provider } from "react-redux"
import Login from "./component/Login/Login";
import Payment from "./component/Payment/Payment";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
   
        <Routes>
            <Route exact path="/login" element={
            <>
               <Login />
            </>
          } />
           <Route exact path="/checkout" element={
              <>
                   <Header />
               <Checkout />
            </>
          } />
            <Route exact path="/payment" element={
              <>
               <Header />
              <Payment />
              </>
          } />
             <Route exact path="/" element={
              <>
                   <Header />
               <Home />
            </>
          } />
        </Routes>
      </div>
      </Router>
      </Provider>
  );
}

export default App;
