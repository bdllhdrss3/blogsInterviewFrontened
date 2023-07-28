import FNavbar from "./components/NavBar";
import { Card, Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://blog-phyw.onrender.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => alert("Error: Couldnt load this blog at moment"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <FNavbar />
      <div
        className="max-h-screen space-4"
        style={{
          background: "#f2f2f2",
          marginTop: "20px",
          height: "100%",
          paddingBottom: "10px",
        }}
      >
        <hr></hr>

        <div></div>
        <div
          style={{ background: "#f2f2f2", marginTop: "20px", margin: "50px" }}
          className="space-y-4"
        >
          <div className="overflow-hidden space-y-4">
            <Card className="p-4 bg-white rounded-md shadow-md w-50  space-y-4">
              {loading ? (
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  <Spinner aria-label="Default status example" />
                </h5>
              ) : (
                <>
                  {blog.title ? (
                    <>
                      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                        {blog.title}
                      </h5>
                      <h6>Date: {new Date(blog.createdAt).toLocaleString()}</h6>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {blog.body}
                      </p>
                    </>
                  ) : (
                    <p>No blog found.</p>
                  )}
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
