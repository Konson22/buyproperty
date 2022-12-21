import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


export default function HowToSale(){
    return(
        <div className='how-to-sale-container'>
            <div className="how-to-sale-container__image lg-hide"></div>
            <div className="how-to-sale-container__text">
                <h1>Find Property for sale across the South Sudan</h1>
                <p>
                    Want to see properties that are Only With Us together with any other newly added homes which match your search requirements? Just set up an alert and you’ll receive details straight to your inbox.
                    Found a home that’s stolen your heart but it’s already under offer? It happens, but we’re here to help! Register for the Reserve Buyers List for the property, and if it does unexpectedly return to the market, you’ll be one of the first to hear.
                </p>
                <Link className='btn btn-primary btn-lg' to='/upload'>Start Selling <FaArrowRight /></Link>
            </div>
            <div className="how-to-sale-container__image sm-hide"></div>
        </div>
    )
}