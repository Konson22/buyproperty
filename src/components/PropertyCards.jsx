import { Link } from 'react-router-dom'
// import { FaMapMarkerAlt } from 'react-icons/fa'

export function PropertyCard({data}){
    return(
        <div className='property-wraper'>
            {data.map(property => <PropertyItem property={property} />)}
        </div>
    )
}


export function PropertyItem({property}){
    return(
        <div className='property-card' key={property._id}>
            <div className="property-card__image">
                <img src={property.images[0]} alt='' />
                <div className='property-card-badge'>
                    <span>For {property.advertType}</span>
                </div>
            </div>
            <div className="property-card__footer">
                <h6>For {property.advertType}</h6>
                <p>{property.state} {property.space} We display thousands of new properties for sale every month</p>
                <div className="property-card-buttons">
                    <h5>{property.price} {property.currency}</h5>
                    <button className='btn btn-primary'>
                        <Link className='link-button' to={`/detail/${property._id}`}>More detail</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}