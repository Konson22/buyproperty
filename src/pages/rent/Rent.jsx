import { useSelector } from 'react-redux'
import { PropertyCard } from '../../components/PropertyCards'


export default function RentPage(){

    const properties = useSelector(state => state.properties)
    return(
        <main>
            <div className="secondary-navbar d-flex align-items-center justify-content-between">
                <ul className='nav-list d-flex align-items-center'>
                    {buySubLinks.map(sublink => (
                        <li className='list' key={sublink}>{sublink}</li>
                    ))}
                </ul>
                <div className="searchbar-container d-flex align-items-center">
                    <input type="search" placeholder='Search...' />
                    <button>Go</button>
                </div>
            </div>
            <div className='my-container'>
                { properties.length >= 1 && <PropertyCard data={properties} /> }
            </div>
        </main>
    )
}

const buySubLinks = [
    'Houses',
    'Appartments',
    'Shops',
    'Plotes'
]