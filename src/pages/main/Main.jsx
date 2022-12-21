import Header from './Header'
import Intro from './Intro'
import Features from './Features'
import TopProperty from './TopProperty'
import './css/main.css'
import HowToSale from './HowToSale'
import Agents from './Agents'

export default function Main(){
    return(
        <div>
           <Header />
           <TopProperty />
           <Intro />
           <Agents />
           <HowToSale />
           <Features />
        </div>
    )
}