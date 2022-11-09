import React from "react";
import Swal from "sweetalert2";
import useTitle from "../hook/useTitle";

const AddServices = () => {
  useTitle("add_service");
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const service = {
      title: form.title.value,
      img: form.url.value,
      destination: form.destination.value,
      transport: form.transport.value,
      fair: form.fair.value,
      time: form.time.value,
      explore: form.explore.value,
      distance: form.distance.value,
      cost: form.cost.value,
      advice: form.advice.value,
      description: form.description.value,
    };
    console.log(service);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Succesfully added the Service",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="my-16 px-3">
      <h1 className="text-center text-4xl">Add Services</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5 my-7">
          <input
            placeholder="Title"
            type="text"
            className="input input-bordered w-full"
            name="title"
            required
          />
          <input
            placeholder="Image URL"
            type="text"
            className="input input-bordered w-full"
            name="url"
            required
          />
          <input
            placeholder="Destination"
            type="text"
            className="input input-bordered w-full"
            name="destination"
            required
          />
          <input
            placeholder="Transport"
            type="text"
            className="input input-bordered w-full"
            name="transport"
            required
          />
          <input
            placeholder="Fair"
            type="text"
            className="input input-bordered w-full"
            name="fair"
            required
          />
          <input
            placeholder="Time"
            type="text"
            className="input input-bordered w-full"
            name="time"
            defaultValue={time}
            required
          />
          <input
            placeholder="Explore"
            type="text"
            className="input input-bordered w-full"
            name="explore"
            required
          />
          <input
            placeholder="Distance"
            type="text"
            className="input input-bordered w-full"
            name="distance"
            required
          />
          <input
            placeholder="Cost"
            className="input input-bordered w-full"
            name="cost"
          />
          <input
            placeholder="Advice (Optional)"
            type="text"
            className="input input-bordered w-full"
            name="advice"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full h-28"
            placeholder="description"
            name="description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 w-full py-4 text-xl font-semibold mt-7 text-white rounded"
        >
          Add service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
