import { categories } from '../../data'
import "./categories.scss"

export default function Categories() {
  return (
    <div className='categories'>
    {categories.map((item)=>(
      <div className='item'>
      <img src={item.img} />
      <div className='title-container'>
      <h1>{item.title}</h1>
      <button>Shop</button>
      </div>
      </div>
    ))}
      
    </div>
  )
}
