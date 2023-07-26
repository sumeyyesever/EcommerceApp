import { AccountCircleOutlined, FavoriteBorderOutlined, KeyboardArrowDown, Search, ShoppingBagOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='top'>
            <div className='left'>
            <div className='language'>
                    <span>EN</span>
                    <KeyboardArrowDown style={{stroke: "#ffffff", strokeWidth: 0.7, cursor:"pointer" }}/>
                </div>
                <div className='input'>
                    <Search style={{stroke: "#ffffff", strokeWidth: 0.7, cursor:"pointer" }}/>
                    <input></input>
                </div>
            </div>
            <div className='center'>
            <Link className='link' to="/" ><h1>SMY.</h1></Link>
            </div>
            <div className='right'>
            
                <AccountCircleOutlined style={{stroke: "#ffffff", strokeWidth: 0.7, cursor:"pointer" }}/>
                <FavoriteBorderOutlined style={{stroke: "#ffffff", strokeWidth: 0.7, cursor:"pointer" }}/>
                <Link className='link cart' to="/cart"><ShoppingBagOutlined style={{stroke: "#ffffff", strokeWidth: 0.7, cursor:"pointer" }} />
                        <span>0</span>                
                </Link>

            
            </div>
         </div>
            <div className='bottom'>
                <div className='item'>
                     <Link className='link' to="/products/1">What's New</Link> 
                </div>
                <div className='item'>
                    <Link className='link' to="/products/2">Women</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/3">Dresses</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/4">Classics</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/5">Accessories</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/6">Athletic</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/7">Curve</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/8">Campaign</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
