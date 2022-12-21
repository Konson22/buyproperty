import { NavLink } from 'react-router-dom'
import { FaBars, FaUser, FaFacebook } from 'react-icons/fa'
import './css/navbar.css'

export default function Navbar(){

    return(
        <nav className='navbar-wraper'>
            <div className="navbar-top d-flex align-items-center justify-content-between">
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='Logo' />
                </div>
                <div className="d-flex sm-hide">
                    <div className="subcribe-container d-flex align-items-center">
                        <input className='input' type="email" placeholder='Subcribe...' />
                        <button className='input button'>Subcribe</button>
                    </div>
                    <div className="socila-media-container d-flex">
                        <div className="media-icon-wraper rounded-circle">
                            <FaFacebook className='media-icon' />
                        </div>
                        <div className="media-icon-wraper rounded-circle">
                            <FaFacebook className='media-icon' />
                        </div>
                        <div className="media-icon-wraper rounded-circle">
                            <FaFacebook className='media-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-bottom d-flex align-items-center justify-content-between">
                <div className='nav-list'>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink className='my-link' to={link.path}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-button">
                    <button className='button btn'>Start salling</button>
                </div>
                <div className="icon-wraper">
                    <FaUser className='icon' />
                </div>
                <div className="icon-wraper lg-hide">
                    <FaBars className='icon' />
                </div>
            </div>
        </nav>
    )
}


const links = [
    { text:'Home', path:'/' },
    { text:'Buy', path:'/buy' },
    { text:'Rent', path:'/rent' },
    { text:'Aucation', path:'/aucation' },
    { text:'Our Agent', path:'/agents' },
    { text:'Valuation', path:'/valuation' },
    { text:'About', path:'/about' },
]