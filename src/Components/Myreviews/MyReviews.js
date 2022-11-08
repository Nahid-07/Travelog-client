import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Context/AuthContext";

const MyReviews = () => {
  const { user } = useContext(ContextProvider);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [user?.email]);
  console.log(comments);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Comment</th>
              <th>Service Name</th>
              <th>ID</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{comment.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {comment.message}
                  <br />
                </td>
                <td>{comment.title}</td>
                <td>{comment._id}</td>
                <th>
                  <button className="bg-yellow-400 px-4 py-2">Update</button>
                  <button className="bg-red-600 px-4 py-2">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
