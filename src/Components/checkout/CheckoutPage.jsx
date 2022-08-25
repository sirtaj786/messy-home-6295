import React from 'react'
import { Button } from "./Button"
import styled from "styled-components"
import "./checkoutStyles.css"
import {Shipping} from '../paymentDet/ShippingPage'
import {Payment} from '../paymentDet/PaymentPage'
import { HeadBar } from '../head/HeadBar'

export const CheckoutPage = ()=>{
    const [currState, setCurrState] = React.useState("shipping");
    return (
       <>
       <HeadBar/>
        <div className="check_bar">
            <div className="wrapper">
                <div className="co"><strong>CHECKOUT</strong></div>
                <div className= "opt">
                    <div className={currState==="shipping"?"show":"hide"} onClick={()=>(setCurrState("shipping"))}><Button><div id="circle123">1</div><span>Shipping</span></Button></div>
                    <div className={currState==="payment"?"show":"hide"} onClick={()=>(setCurrState("payment"))}><Button ><div id="circle123">2</div><span>Payment</span></Button></div>
                </div>        
            </div>
            {/* updated */}
            {currState === "shipping"? <Shipping setCurrState={setCurrState}/> : <Payment/>}
        </div>
        </>
    
    )
}