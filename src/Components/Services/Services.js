import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 justify-items-center px-2'>
            {
                services.map(service => <div className="max-w-xs rounded-md shadow-md  ">
                <img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{service.title}</h2>
                        <p className="dark:text-gray-100">{service.description.length > 100 ? service.description.slice(0,100):service.description}</p>
                    </div>
                    <Link to={`/servicedetails/${service._id}`}><button type="button" className="flex items-center bg-orange-600 text-white justify-center w-full p-3 font-semibold tracking-wide rounded-md ">View details</button></Link>
                </div>
            </div>)
            }
        </div>
    );
};

export default Services;