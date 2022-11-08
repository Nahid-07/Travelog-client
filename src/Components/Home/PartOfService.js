import React, { useEffect, useState } from "react";

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
                  <p
                    rel="noopener noreferrer"
                    href="#"
                    className="mb-0 capitalize "
                  >
                    Photography
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={place.img}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 "
                  />
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
                </div>
                <button className="btn btn-primary w-full">view details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline btn-primary w-1/4">View all</button>
      </div>
    </div>
  );
};

export default PartOfService;
