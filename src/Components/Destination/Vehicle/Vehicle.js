import React from 'react';
import './Vehicle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Vehicle = (props) => {
    const {vehicleImage, vehicleType, seats, price} = props

    return (
        <div className='vehicle-card'>
            <img src={vehicleImage} alt="vehicle" srcset=""/>
            <p>{vehicleType}</p>
            <p><FontAwesomeIcon icon={faUserFriends} /> {seats}</p>
            <p>${price}</p>
        </div>
    );
};

export default Vehicle;