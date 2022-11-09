import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PartOfService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicespart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {service.map((place) => (
          <div key={place._id}>
            <div className="max-w-lg p-4 shadow-md ">
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                  <p className="mb-0 capitalize ">Photography</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <PhotoProvider>
                    <PhotoView src={place.img}>
                    <img
                    src={place.img}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 "
                  />
                    </PhotoView>
                  </PhotoProvider>
                </div>

                <div className="space-y-2">
                  <div rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold ">{place.title}</h3>
                  </div>
                  <p className="leading-snug ">
                    {place.description.length > 100
                      ? place.description.slice(0, 100)
                      : place.description}
                  </p>
                  <p className="text-red-500 text-lg">Price : {place.cost}</p>
                </div>
                <Link to={`/servicedetails/${place._id}`}>
                  <button className="btn btn-primary w-full">
                    view details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to="/services">
          <button className="btn btn-outline btn-primary w-1/4">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PartOfService;
