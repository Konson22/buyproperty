import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


export default function Intro(){
    return(
        <div className='home-section introduction-container'>
            <div className="introduction-container__image"></div>
            <div className="introduction-container__text">
                <h1>Search thousands of properties for sale</h1>
                <p>
                    Want to see properties that are Only With Us together with any other newly added homes which match your search requirements? Just set up an alert and you’ll receive details straight to your inbox.
                    Found a home that’s stolen your heart but it’s already under offer? It happens, but we’re here to help! Register for the Reserve Buyers List for the property, and if it does unexpectedly return to the market, you’ll be one of the first to hear.
                </p>
                <Link className='btn btn-primary btn-lg' to='/buy'>Explore more <FaArrowRight /></Link>
            </div>
        </div>
    )
}