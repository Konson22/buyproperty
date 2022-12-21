import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { FiMail, FiHome, FiUpload, FiBell, FiUser } from 'react-icons/fi'
import './css/appbar.css'


export function Appbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='appbar-container'>
            <div className="appbar-top-wraper d-flex align-items-center justify-content-between sm-hide">
                <div className="contacts-wraper">
                    <span><FiMail className='icon' />  konsonak@gmail.com</span>
                    <span><FaPhoneAlt className='icon' />  +211920079070</span>
                    <span><FaWhatsapp className='icon' />  +211920079070</span>
                </div>
                <div className="social-media-wraper d-flex">
                    <div className="socila-media-content d-flex align-items-center justify-content-center rounded-circle">
                        <FaTwitter className='icon' />
                    </div>
                    <div className="socila-media-content d-flex align-items-center justify-content-center rounded-circle">
                        <FaFacebook className='icon' />
                    </div>
                    <div className="socila-media-content d-flex align-items-center justify-content-center rounded-circle">
                        <FaInstagram className='icon' />
                    </div>
                </div>
            </div>
            <div className="appbar-nav d-flex align-items-center justify-content-between">
                <span className='icon-wraper menu sm-hide' onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <FaBars className='icon' /> : <FaTimes className='icon' /> }
                </span>
                <div className="logo-wraper">
                    <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='Logo' />
                </div>
                <div className="nav-links-wraper">
                    <ul className='ul p-0 m-0'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink className='my-link' to={link.path}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="user-buttons d-flex align-items-center">
                    {/* <NavLink className='btn btn-primary' to='/upload'>
                        <span className="sm-hide">Start salling</span> 
                        <span className="lg-hide">Upload</span> 
                    </NavLink>
                    <NavLink className='icon-wraper lg-hide' to='/'>
                        <FaHome className='icon' />
                    </NavLink>
                    <div className='icon-wraper'>
                        <FaUser className='icon' />
                    </div> */}
                    <div className='icon-wraper'>
                        <FaBars className='icon' />
                    </div>
                </div>
            </div>
            {/* <div className="appbar-top-section d-flex align-items-center justify-content-between">
                <NavLink className='nav-icon-wraper lg-hide' to='/'>
                    <FaHome className='nav-icon' />
                </NavLink>
                <div className="contacts-container"></div>
            </div> */}
            {/* START OF BOTTOM NAVBAR */}
            {/* <div className="appbar-bottom-section">
                <div className="logo-container rounded-circle">
                    <img className='rounded-circle' src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='Logo' />
                </div>
                <div className="navigation-section sm-hide">
                    <ul className='nav-list'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink className='my-link' to={link.path}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="buttons-section d-flex align-items-center">
                    <NavLink className="btn btn-primary" to='/upload'>Start salling</NavLink>
                    <span className='nav-icon-wraper'>
                        <FaBell className='nav-icon' />
                    </span>
                    <span className='nav-icon-wraper'>
                        <FaUser className='nav-icon' />
                    </span>
                    <span className='nav-icon-wraper lg-hide' onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? <FaBars className='nav-icon' /> : <FaTimes className='nav-icon' /> }
                    </span>
                </div>
            </div> */}
        </div>
    )
}


export function MobileNav(){
    return(
        <nav className='mobile-nav-wraper'>
            <div className="mobile-nav-item d-flex align-items-center justify-content-center flex-column">
                <FiHome className='icon' />
                <span>Home</span>
            </div>
            <div className="mobile-nav-item d-flex align-items-center justify-content-center flex-column">
                <FaHome className='icon' />
                <span>Proerties</span>
            </div>
            <div className="mobile-nav-item lg rounded-circle center d-flex align-items-center justify-content-center flex-column">
                <FiUpload className='icon' />
                {/* <span>Upload</span> */}
            </div>
            <div className="mobile-nav-item d-flex align-items-center justify-content-center flex-column">
                <FiBell className='icon' />
                <span>Home</span>
            </div>
            <div className="mobile-nav-item d-flex align-items-center justify-content-center flex-column">
                <FiUser className='icon' />
                <span>Account</span>
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
]