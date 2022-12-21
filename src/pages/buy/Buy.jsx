import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PropertyCard } from '../../components/PropertyCards'
import { NavDropdown } from 'react-bootstrap'
import { propertiesType, statesData } from '../../assets/data'
import { FaSearch } from 'react-icons/fa'
import './css/buy.css'



export default function BuyPage(){

    const [currentProperties, setCurrentProperties] = useState([])

    const properties = useSelector(state => state.properties)
    
    useEffect(() => {
        properties && setCurrentProperties(properties)
    }, [properties])

    const handleCategorySearch = category => {
        let res = category === 'All' ? properties : properties.filter(item => item.category.toLowerCase().includes(category.toLowerCase()))
        setCurrentProperties(res)
    }
    
    const handleStateSearch = state => {
        let res = properties.filter(item => item.state.toLowerCase().includes(state.toLowerCase()))
        setCurrentProperties(res)
    }
    
    const handleSearch = str => {
        let res = properties.filter(item => item.category.toLowerCase().includes(str.toLowerCase()) || item.state.toLowerCase().includes(str.toLowerCase()))
        setCurrentProperties(res)
    }

    return(
        <main>
            <nav className="secondary-navbar">
                <div className='nav-links-wraper sm-hide'>
                    <ul className='d-flex align-items-center p-0 m-0'>
                        {propertiesType.map(category => (
                            <li className='list' key={category} onClick={() => handleCategorySearch(category)}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className='nav-search-wraper d-flex'>
                    <NavDropdown 
                        title={
                            <p className='p-0 m-0'><span className='sm-hid'>Property</span> Type</p>
                        } 
                        className='dropdown-content lg-hid'
                    >
                        {propertiesType.map(category => (
                            <NavDropdown.Item key={category} onClick={() => handleCategorySearch(category)}>{category}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <NavDropdown title='Location' className='location-dropdown sm-hid'>
                        {statesData.map(state => (
                            <NavDropdown.Item key={state} onClick={() => handleStateSearch(state)}>{state}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <input className='sm-hide' type="search" placeholder='Search...' onKeyUp={ev => handleSearch(ev.target.value)} />
                    <button><FaSearch className='sm-hide' /> Find</button>
                </div>
            </nav>
            <div className='my-container'>
                { currentProperties.length >= 1 ? <PropertyCard data={currentProperties} /> : 'Not found'}
            </div>
        </main>
    )
}



