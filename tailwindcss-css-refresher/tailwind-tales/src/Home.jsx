import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1> Home Page Master Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;