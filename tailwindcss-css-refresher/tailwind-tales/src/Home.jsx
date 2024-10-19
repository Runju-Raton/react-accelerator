import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    // return (
    //     <div>
    //         <h1> Home Page Master Layout</h1>
    //         <Outlet></Outlet>
    //     </div>
    // );
    const [number, setNumber] = useState(1);

    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </>
    )
};

export default Home;