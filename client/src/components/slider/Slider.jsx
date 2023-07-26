import { useState } from "react";
import "./slider.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { SliderItems } from "../../data";


export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      }
      else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 );
      }
    }
  return (
    <div className='slider'>
    <div className="arrow arrowLeft" onClick={()=>handleClick("left")}>
        <KeyboardArrowLeft />
    </div>
    <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
    {SliderItems.map((item)=>(
        <div className="slide" style={{backgroundColor: "#"+ item.bg +""}}>
        <div className="left">
         <img src={item.img}/>
       </div>
       <div className="right" >
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <button>Shop</button>
       </div>
        </div>

    ))}
    </div>
      
       <div className="arrow arrowRight" onClick={()=>handleClick("right")}>
        <KeyboardArrowRight/>
       </div>
      
    </div>
  )
}
