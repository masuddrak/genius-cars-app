import React from 'react';

const Service = ({service}) => {
    console.log(service)
    const {img,name,description,price}=service
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price:{price}</h6>
            <p>{description}</p>
        </div>
    );
};

export default Service;