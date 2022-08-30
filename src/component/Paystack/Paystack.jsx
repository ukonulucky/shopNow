import React, { useState } from 'react'
 import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { PaystackButton } from 'react-paystack';


function Paystack() {
    const navigate = useNavigate()
    const [button, setButton] = useState(false)
    const data = useSelector(state => state.itemAdded?.map((i,j) => {
        return  parseFloat(i.price)
    }))
    const userLogin = useSelector(state => state.userLogin)
    const total = data.reduce((prev,iniTial) => {
        return prev + iniTial
    }, 0)

    
    const config = {
        reference: (new Date()).getTime().toString(),
        email: userLogin,
        amount: total ? total * 100 : 0,
        publicKey: 'pk_test_8b8bfac8965a81920147c400c1e45e3ddf09155a',
    };

         
        const handlePaystackSuccessAction = (reference) => {
           navigate("/")
            alert("payment successfull")
        };
        const handlePaystackCloseAction = () => {
            alert("payment failed")
            
           }
        const componentProps = {
            ...config,
            text: 'Buy Now',
            onSuccess: (reference) => handlePaystackSuccessAction(reference),
            onClose: handlePaystackCloseAction,
        };
        
          
        
    return (
        <div>
      <PaystackButton className="pay" {...componentProps} />
      </div>
            )
            
}

export default Paystack