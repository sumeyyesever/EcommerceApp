import "./singleproduct.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

export default function SingleProduct() {
  const [selectedImg, setSelectedImg] = useState(0);
  
  const images = [
    "/assets/product_main_0.jpg", 
    '/assets/product_main_1.jpg', 
    '/assets/product_main_2.jpg' , 
    '/assets/product_main_3.jpg'
  ]

  return (

    <>
    <Navbar />
    <div className='single'>
    <div className='left'>
      <div className='small-images'>
        <img src={images[0]} onClick={e=>setSelectedImg(0)} />
        <img src={images[1]} onClick={e=>setSelectedImg(1)}/>
        <img src={images[2]} onClick={e=>setSelectedImg(2)}/>
        <img src={images[3]} onClick={e=>setSelectedImg(3)}/>
        
      </div>
      <div className="big-image">
      <img src={images[selectedImg]} />
      </div>
      
    </div>
    <div className='right'>
      <h1>Shirt</h1>
      <span className='logo'>SMY.</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <span className='price'>$60</span>
      <div className='color-container'>
      <span>Color:</span>
        <div className='color' style={{backgroundColor:"black"}}></div>
        <div className='color' style={{backgroundColor:"gray"}}></div>
        <div className='color' style={{backgroundColor:"white"}}></div>
      </div>
      <div className='size-container'>
      <span>Size:</span>
        <div className='size'>S</div>
        <div className='size'>M</div>
        <div className='size'>L</div>
        <div className='size'>XL</div>
      </div>
      <div className='button-container'>
        <button style={{backgroundColor: "black", color:"white"}}>ADD TO CART</button>
        <button style={{backgroundColor:"white"}}>ADD TO WISHLIST</button>
      </div>
      </div>
      
    </div>
         <Footer /> 
    </>
  )
}
