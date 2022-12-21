import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import { PropertyItem } from '../../components/PropertyCards'
// import { usePropertiesContext } from '../../context/PropertiesProvider'



const breakPoints = [
    {
      width:0,
      itemsToShow:1,
      itemsToScroll:1
    },
    {
      width:500,
      itemsToShow:3,
      itemsToScroll:1
    },
]


export default function TopProperty(){

    const properties = useSelector(state => state.properties);
    // const {loading, errors, properties} = usePropertiesContext();

    // console.log(properties)

    return(
        <div className='home-section home-properties-container'>
            <div className='home-section__title text-center'>
                <h1>Features Properties</h1>
            </div>
            <div className='home-section__content d-flex'>
                <Carousel 
                    breakPoints={breakPoints} 
                    initialFirstItem={0} 
                    // initialActiveIndex={0} 
                    // enableAutoPlay={true}
                    // autoPlaySpeed={4000}
                    className='carousel-wraper'
                >
                    { properties.length >= 1 && properties.map(property => <PropertyItem property={property} />) }
                </Carousel>
            </div>
            <div className="mt-5 text-center">
                <Link className='btn btn-primary btn-lg' to='/buy'>view All Properties</Link>
            </div>
        </div>
    )
}