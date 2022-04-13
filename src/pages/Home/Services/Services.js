import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1>Total Service {services.length}</h1>
            <div>
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;