import React, { useContext } from 'react'
import './placeholder.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import ThankYou from '../../component/ThankYouPage/ThankYou'
const Placeholder = () => {

const {getTotalCartAmount} =useContext(StoreContext)
const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/ThankYou");
};
  return (
    <form className='place-order' onSubmit={handleSubmit}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name'   required />
            <input type="text"  placeholder='Last name'  required/>
          </div>
          <input type="email" placeholder='Email address'  required/>
          <input type="text" placeholder='Street' required />
          <div className="multi-fields">
            <input type="text" placeholder='City' required />
            <input type="text"  placeholder='State' required/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' required />
            <input type="text"  placeholder='Country' required/>
          </div>
          <input type="text" placeholder='Phone ' required />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
            <button type='submit'>PROCCED TO CHECKOUT</button>
            
        </div>
        </div>
    </form>
  )
}

export default Placeholder