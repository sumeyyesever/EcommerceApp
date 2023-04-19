import { Send } from '@mui/icons-material'
import "./newsletter.scss";

export default function Newsletter() {
  return (
    <div className='newsletter'>
       <h1>Newsletter</h1>
       <p>Get Timely Updates From Us!</p>
       <div className='input-container'>
        <input placeholder='Your Email' />
        <button>
            <Send />
        </button>
       </div>
      
    </div>
  )
}
