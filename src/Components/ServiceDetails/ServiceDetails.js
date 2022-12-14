import React, { useContext, useEffect, useState } from "react";
import {  Link , useLoaderData } from "react-router-dom";
import { ContextProvider } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../hook/useTitle";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(ContextProvider);
  const [comments, setComments] = useState([]);
  useTitle('service_details')

  const handleReview = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const name = user?.displayName;
    const photo = user?.photoURL;
    const commentor = {
      message,
      name,
      photo,
      email : user?.email,
      title: data.title
    };
    fetch("https://assignment-11-server-chi.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentor),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks for your valueable feedback",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
      });
  };
  useEffect(() => {
    fetch("https://assignment-11-server-chi.vercel.app/allcomments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data)
      });
  }, [comments]);

  
  return (
    <section className="">
      <div className="container max-w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
          <img
            src={data.img}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="truncate md:text-clip text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {data.destination}
            </h3>
            <span className="text-xs ">Description</span>
            <p>{data.description}</p>
            <h1 className="text-3xl font-bold">Transport</h1>
            <p>{data.transport}</p>
            {/* <h1 className="font-semibold">Time</h1>
            <p>{data.time}</p> */}
            <p className="text-2xl font-semibold">{data.explore}</p>
            <p className="text-xl">
              <span className="font-bold">Cost</span> :{data.cost}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-center my-5">Peoples Reviews</h1>
        <div></div>
        <div className="bg-slate-50">
          <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center my-5">
                Your opinion matters!
              </h2>

              {/* load public comments */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {comments.map((comment) => (
                  <div key={comment._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-gray-300">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src={comment.photo}
                            alt=""
                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{comment.name}</h4>
                          <span className="text-xs dark:text-gray-400">
                            2 days ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                      <p>{comment.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-gray-600"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {
                user?.email ? <form onSubmit={handleReview} className="flex flex-col w-full">
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                ></textarea>
                <button
                  type="submit"
                  className="py-4 my-8 font-semibold rounded-md bg-gray-700 text-white"
                >
                  Leave feedback
                </button>
              </form>
              :
              <>
                <div className="text-red-800 text-xl">
                Please log in to add your valueable review
              </div>
              <Link to='/login' className="bg-orange-600 px-5 py-3 text-white font-semibold rounded-full mt-4">Login</Link>
              </>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
