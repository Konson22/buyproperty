import { NavDropdown } from 'react-bootstrap'
import { statesData } from '../../assets/data'
import { FaSearch } from 'react-icons/fa'


export default function Header(){
    return(
        <header className='header-wraper d-flex align-items-center justify-content-center'>
            <div className="hero-container">
                <h1>WE HELP OUR CLIENTS</h1>
                <h2>MAKE BETTER DECITION IN REAL ESTATE</h2>
                {/* <div className="hero-search-wraper">
                    <div className="hero-search-bar d-flex">
                        <input className='' type="search" placeholder='Seach...' />
                        <button><FaSearch /> <span className='sm-hide'>Search</span></button>
                    </div>
                </div> */}
                <div className="header-search-wraper d-flex justify-content-between">
                    <NavDropdown title='Location' className='dropdown-content'>
                        {statesData.map(state => (
                            <NavDropdown.Item key={state}>{state}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <NavDropdown title='Property Type' className='dropdown-content category'>
                        {statesData.map(state => (
                            <NavDropdown.Item key={state}>{state}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <div className="search-bar search-content d-flex">
                        <input className='' type="search" placeholder='Seach...' />
                        <button><FaSearch /> <span className='sm-hide'>Search</span></button>
                    </div>
                </div>
            </div>
        </header>
    )
}