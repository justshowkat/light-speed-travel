import React from 'react';
import FrontPageCard from '../FrontPageCard/FrontPageCard';
import './Home.css'

const Home = () => {
    const cardInfo = [
        {
            title: 'Bike',
            image: './images/Bike.png'
        },
        {
            title: 'Car',
            image: './images/Car.png'
        },
        {
            title: 'Bus',
            image: './images/Bus.png'
        },
        {
            title: 'Train',
            image: './images/Train.png'
        }
    ]

    console.log(cardInfo.map(res => res.image))
    return (
        <div className='home-Section'>
            {
                cardInfo.map(data => <FrontPageCard title={data.title} img={data.image}></FrontPageCard>)
            }
            
        </div>
    );
};

export default Home;