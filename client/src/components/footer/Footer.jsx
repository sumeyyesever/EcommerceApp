import "./footer.scss";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <h1>SMY.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="social-container">
              <span><Facebook /></span> 
                <span><Twitter /></span>
                <span><Instagram /></span>
                <span><Pinterest /></span>
        </div>
      </div>
      <div className="lists">
        <div className="left-lists">
        <h3>Info</h3>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Work With Us</li>
                <li>Journal</li>
            </ul>
        </div>
        <div className="right-lists">
        <h3>Customer Care</h3>
        <ul>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Payment Methods</li>
                <li>Gift Cards</li>
            </ul>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <span><Room style={{marginRight:"10px"}}/>Something St. Something City 1996</span>
        <span><Phone style={{marginRight:"10px"}} />+1 234 567 89</span>
        <span><MailOutline style={{marginRight:"10px"}}/>something@gmail.com</span>
        <img src="/assets/payment.png" />
      </div>
    </div>
  )
}
