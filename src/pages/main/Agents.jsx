import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel'


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


export default function Agents() {
    return (
        <div className='home-section'>
            <div className='home-section__title text-center'>
                <h1>Our Agents</h1>
            </div>
            <div className='home-section__content agents-container d-flex'>
                <Carousel 
                    breakPoints={breakPoints} 
                    className=''
                >
                    {agents.map(agent => (
                        <div className='agent-card' key={agent._id}>
                            <div className="image">
                                <img src={agent.avatar} alt='' />
                            </div>
                            <div className="text text-center p-3">
                                <h3>{agent.name}</h3>
                                <h5>{agent.title}</h5>
                                <div className="mt-3 d-flex justify-content-center">
                                    <span className='social-media-icon rounded-circle d-flex align-items-center justify-content-center'>
                                        <FaInstagram className='icon' />
                                    </span>
                                    <span className='social-media-icon rounded-circle d-flex align-items-center justify-content-center'>
                                        <FaTwitter className='icon' />
                                    </span>
                                    <span className='social-media-icon rounded-circle d-flex align-items-center justify-content-center'>
                                        <FaFacebook className='icon' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}


const agents = [
    {
        _id:'1',
        name:'Martin John',
        title:'Marketting Manager',
        avatar:process.env.PUBLIC_URL+ '/images/kon.png'
    },
    {
        _id:'2',
        name:'Juma Ali',
        title:'Sale Manager',
        avatar:process.env.PUBLIC_URL+ '/images/ring.jpg'
    },
    {
        _id:'3',
        name:'Aliza John',
        title:'Photographer',
        avatar:process.env.PUBLIC_URL+ '/images/mum.jpg'
    },
    {
        _id:'4',
        name:'Martin John',
        title:'Marketting Manager',
        avatar:process.env.PUBLIC_URL+ '/images/user.png'
    },
    {
        _id:'5',
        name:'Martin John',
        title:'Marketting Manager',
        avatar:process.env.PUBLIC_URL+ '/images/kon.png'
    },
]