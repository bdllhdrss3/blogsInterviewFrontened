import React, { useState, useEffect } from "react";
import FNavbar from "./components/NavBar";
import { Card, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://blog-phyw.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => alert("Error: couldnt load blogs"))
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
          minHeight: "100%",
          paddingBottom: "10px",
        }}
      >
        <hr></hr>
        <div></div>
        <div
          style={{
            background: "#f2f2f2",
            marginTop: "20px",
            margin: "50px",
            height: "100%",
          }}
          className="overflow-hidden space-y-4"
        >
          <div className="overflow-hidden space-y-4">
            {loading ? (
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                <Spinner aria-label="Default status example" />
              </h5>
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <Card
                  key={blog}
                  className="p-4 bg-white rounded-md shadow-md w-50  space-y-4"
                  href="#"
                >
                  <Link to={`blogs/${blog.id}`} key={blog.id}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {blog.body}
                    </p>
                  </Link>
                </Card>
              ))
            ) : (
              <p>Sthere are no blogs at moment</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
