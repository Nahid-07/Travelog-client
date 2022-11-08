import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Context/AuthContext";

const MyReviews = () => {
  const { user, loading } = useContext(ContextProvider);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [user?.email]);


  if (loading) {
    return <progress className="progress w-full"></progress>;
  }


  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this item");
    if (confirm) {
      fetch(`http://localhost:5000/comments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("successfully deleted");
            const rest = comments.filter((resC) => resC._id !== id);
            setComments(rest);
          }
        });
    }
  };

  
  return (
    <div>
      <div className="overflow-x-auto w-full">
        {comments.length > 0 ? (
          <>
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
                      <button className="bg-yellow-400 px-4 py-2">
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="bg-red-600 px-4 py-2"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div>
            <section className="flex items-center h-full p-16 bg-slate-200">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                  <h2 className="mb-8 font-extrabold text-5xl">
                    No review found !!!!!!
                  </h2>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
