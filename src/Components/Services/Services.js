import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hook/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ContextProvider } from "../../Context/AuthContext";

const Services = () => {
  useTitle("services");
  const [services, setServices] = useState([]);
  const { loading } = useContext(ContextProvider);

  useEffect(() => {
    fetch("https://assignment-11-server-chi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 justify-items-center px-2">
      {services.map((service) => (
        <div key={service._id} className="rounded-md shadow-md  ">
          <PhotoProvider>
            <PhotoView src={service.img}>
              <img
                src={service.img}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 "
              />
            </PhotoView>
          </PhotoProvider>

          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {service.title}
              </h2>
              <p className="dark:text-gray-100">
                {service.description.length > 100
                  ? service.description.slice(0, 100)
                  : service.description}
              </p>
              <p> cost :{service.cost}</p>
            </div>
            <Link to={`/servicedetails/${service._id}`}>
              <button
                type="button"
                className="flex items-center bg-orange-600 text-white justify-center w-full p-3 font-semibold tracking-wide rounded-md "
              >
                View details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;