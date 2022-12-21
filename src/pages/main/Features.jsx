import { FaSignal, FaAd } from 'react-icons/fa'
import {saleProcessData} from '../../assets/data'



export default function Features(){
    return(
        <div className='home-section'>
            <div className='home-section__title text-center'>
                <h1>Salling Process.</h1>
            </div>
            <div className='home-section__content feature-container'>
                {saleProcessData.map(process => {
                    return(
                        <div className="feature-card" key={process.title}>
                            <h4>{process.title}</h4>
                            <ul>
                            {process.detail.split('->').map(text => (
                                <li>{text}</li>
                            ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}