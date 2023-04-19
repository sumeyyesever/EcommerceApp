import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import "./cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from 'react';

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

  return (
    <>
<Navbar />
   
    <div className='container'>
    <h1>YOUR CART</h1>
    <div className='cart-top'>
    <div className='titles'>
        <h3 className='title-1'>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
    </div>
    <hr />
    <div className='cart-info'>
        <div className='product'>
            <img src='/assets/cart_item.jpg' />
            <div className='product-info'>
                <span className='logo'>SMY.</span>
                <span className='name'>Necklace</span>
                <span className='size'>Size: <b>STD</b></span>
            </div>
        </div>
        <span className='price'>$60</span>
        <div className='quantity-container'>
        <div className='arrow' onClick={()=>setQuantity((prev) => prev + 1)}>
        <KeyboardArrowUp />
        </div>
        <span className='quantity'>{quantity}</span>
        <div className='arrow' onClick={()=>setQuantity((prev)=> prev === 1 ? 1 : prev - 1)}>
         <KeyboardArrowDown />
        </div>
        </div>
        <span className='total'>$60</span>
    </div>

    </div>
    <hr />
    <div className='cart-bottom'>
    <div className='checkout-item'>
    <span className='title'>SUBTOTAL:</span>
        <span>$60</span>
    </div>
    <hr />
    <div className='checkout-item'>
    <span className='title'>SHIPPING:</span>
        <span>$0</span>
    </div>
    <hr />
    <div className='checkout-item'>
    <span className='title'>COUPON CODE:</span>
        <span>ASGFST6</span>
    </div>
    <hr />
    <div className='checkout-item'>
    <span className='title'>GRAND TOTAL:</span>
        <span className='grand'>$60</span>
    </div>
    <button>CHECK OUT</button>    
    </div>
      
    </div>

    <Footer />
    </>
  )
}
