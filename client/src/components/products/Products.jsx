import {products} from "../../data";
import Item from "../item/Item";
import "./products.scss"

export default function Products() {
  return (
    <div className="products">
      {products.map((item)=>(
          <Item p={item} />
      ))}
    </div>
    
  )
}
