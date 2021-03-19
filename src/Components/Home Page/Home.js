import React from 'react';
import FrontPageCard from '../FrontPageCard/FrontPageCard';
import './Home.css'

const Home = () => {
    const cardInfo = [
        {
            title: 'Bike',
            image: './images/Bike.png',
            routePath: '/bike'
        },
        {
            title: 'Car',
            image: './images/Car.png',
            routePath: '/car'
        },
        {
            title: 'Bus',
            image: './images/Bus.png',
            routePath: '/bus'
        },
        {
            title: 'Train',
            image: './images/Train.png',
            routePath: '/train'
        }
    ]

    return (
        <div className='home-Section'>
            {
                cardInfo.map(data => <FrontPageCard title={data.title} img={data.image} routePath={data.routePath}></FrontPageCard>)
            }
            
        </div>
    );
};

export default Home;