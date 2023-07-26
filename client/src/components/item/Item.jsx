import { FavoriteBorderOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import "./item.scss";
import { Link } from 'react-router-dom';

export default function Item({p}) {
  return (
    <div className='item'>
       <img src={p.img} />
       <div className='info'>
        <div className='icon'>
            <ShoppingBagOutlined />
        </div>
        <div className='icon'>
            <FavoriteBorderOutlined />
        </div>
        <div className='icon'>
           <Link className='link' to="/product/1"> <SearchOutlined /> </Link>
        </div>
       </div>
      
    </div>
  )
}
