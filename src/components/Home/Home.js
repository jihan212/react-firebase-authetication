import React, { useState } from 'react';
import './Home.css'
import fakedata from '../../fakedata/fakedata.json'
import Vehicles from '../Vehicles/Vehicles'

const Home = () => {
    console.log(fakedata);

    const [ vehicle , setVehicle ] =  useState (fakedata);

    return (
        <div className="home">
                {
                    vehicle.map ( vehicle => <Vehicles vehicle = {vehicle}></Vehicles> )
                }
        </div>
    );
};

export default Home;