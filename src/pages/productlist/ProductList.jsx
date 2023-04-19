import Products from "../../components/products/Products"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./productlist.scss";

export default function ProductList() {
  return (

    <>
    <Navbar />
    
    <div className='productlist'>
    <div className='wrapper'>
      <div className='left'>
        <h1>DRESSES</h1>
        <div className='filter-item'>
          <div className='input-item'>
            <input id='all' name='all' type='checkbox' />
            <label htmlFor='all'>View All</label>
          </div>
          <div className='input-item'>
            <input id='mini' name='mini' type='checkbox' />
            <label htmlFor='mini'>Mini</label>
          </div>
          <div className='input-item'>
            <input id='maxi' name='maxi' type='checkbox' />
            <label htmlFor='maxi'>Maxi</label>
          </div>
        </div>
        <hr/>
        <div className='filter-item'>
        <h3>Size</h3>
          <div className='input-item'>
            <input id='small' name='small' type='checkbox' />
            <label htmlFor='small'>S</label>
          </div>
          <div className='input-item'>
            <input id='medium' name='medum' type='checkbox' />
            <label htmlFor='medium'>M</label>
          </div>
          <div className='input-item'>
            <input id='large' name='large' type='checkbox' />
            <label htmlFor='large'>L</label>
          </div>
       
        <div className='input-item'>
            <input id='xlarge' name='xlarge' type='checkbox' />
            <label htmlFor='xlarge'>XL</label>
          </div>
          </div>
        <hr/>
        <div className='filter-item'>
          <h3>Price</h3>
          <div className='input-item'>
            <span>0</span>
            <input type='range' />
            <span>1000</span>
          </div>
        </div>
        <hr />
        <div className='filter-item'>
        <h3>Sort By</h3>
          <div className='input-item'>
            <input id='bestsell' name='best selling' type='checkbox' />
            <label htmlFor='bestsell'>Best Selling</label>
          </div>
          <div className='input-item'>
            <input id='asc' name='ascending' type='checkbox' />
            <label htmlFor='asc'>Price: Ascending</label>
          </div>
          <div className='input-item'>
            <input id='desc' name='descending' type='checkbox' />
            <label htmlFor='desc'>Price: Descending</label>
          </div>
        </div>
      </div>
    <div className='right'>
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
    </div>
      
    </div>
    <Footer />
    </>
  )
}
