import React from 'react';
import HouseSVG from 'svg/house.svg';

const House = () => {
    return (
        <div className="house-container" dangerouslySetInnerHTML={{ __html: HouseSVG }} />
    );
}

export default House;