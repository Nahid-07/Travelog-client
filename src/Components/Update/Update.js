import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const comment = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedMessage = {
      message: e.target.message.value,
    };
    fetch(`https://assignment-11-server-chi.vercel.app/comments/${comment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
      });
  };
  console.log(comment);
  return (
    <div className="bg-slate-200 py-10">
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-6">
          <input
            type="text"
            defaultValue={comment._id}
            placeholder="Type here"
            className="input input-bordered w-full"
            readOnly
          />
          <input
            type="text"
            // defaultValue={comment.message}
            placeholder="Update your review"
            className="input input-bordered w-full"
            name="message"
          />
          <input
            type="text"
            defaultValue={comment.name}
            placeholder="Type here"
            className="input input-bordered w-full "
            readOnly
          />
          <input
            type="text"
            defaultValue={comment.email}
            placeholder="Type here"
            className="input input-bordered w-full "
            readOnly
          />
        </div>
        <div className="px-3 mt-5">
          <button
            type="submit"
            className="bg-red-700 text-white font-semibold w-full py-3 rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
