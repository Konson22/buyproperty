import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropertyCard } from '../../components/PropertyCards';
import Carousel from 'react-elastic-carousel';
import './css/property.css'



function DetailPage() {

  const { propertyId } = useParams();
  const properties = useSelector(state => state.properties);

  
  const property = properties.filter(property => property._id === propertyId)[0]
 

  return(
    <div className='my-container d-flex'>
      <div className="property-sidebar"></div>
      {property ?
        <div className="property-content-wraper">
          <div className="property-content d-flex">
            <div className="property-content-left">
              <Carousel 
                breakPoints={[{width:0, itemsToShow:1, itemsToScroll:1}]} 
                initialFirstItem={0} 
              >
                { property.images.length >= 1 && property.images.map(image => (
                  <div className="property-image">
                    <img src={image} alt='' />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="property-content-right">
              <h2>{property.category} {property.advertType}</h2>
              <p>{property.description}</p>
              <div>Rooms: {property.rooms}, Bath rooms: {property.rooms}, Space: {property.space}</div>
              <h1>{property.price} {property.currency}</h1>
              <div className="d-flex">
                <button className='btn btn-primary'>Contact</button>
                <button className='btn btn-primary mx-2'>Request Viewing</button>
              </div>
            </div>
          </div> 
          {/* START OF RELATED ITEMS */}
          <div className="related-items-container">
            <h1>Related Property</h1>
            {properties.length >= 1 && <PropertyCard data={properties} />}
          </div>
        </div> 
        : "Loading..."
      }
    </div>
  )
}

export default React.memo(DetailPage)


/*
  const containerStyle = {
    width: '400px',
    height: '400px'
    };

    const center = {
    lat: -3.745,
    lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>

*/