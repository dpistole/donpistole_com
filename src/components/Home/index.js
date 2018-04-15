import React from 'react';
import HouseSVG from 'svg/house.svg';

const Home = () => {
    return (
        <div className="home-container" dangerouslySetInnerHTML={{ __html: HouseSVG }} />
    );
}

export default Home;