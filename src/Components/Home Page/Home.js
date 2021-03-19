import React from 'react';
import { cardInfo } from '../FakeData/CardInfo';
import FrontPageCard from '../FrontPageCard/FrontPageCard';
import './Home.css'

const Home = () => {
    return (
        <div className='home-Section'>
            {
                cardInfo.map(data => <FrontPageCard title={data.title} img={data.image} routePath={data.routePath}></FrontPageCard>)
            }
            
        </div>
    );
};

export default Home;