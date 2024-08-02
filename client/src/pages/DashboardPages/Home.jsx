import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectStastics from "../../components/dashboard/ProjectStatistics";
import Platforms from "../../components/dashboard/Platforms";
import ProjectCard from "../../components/dashboard/ProjectCard";

import HomeProduct from "../../components/dashboard/data/HomeProduct";
import MemberCard from "../../components/dashboard/MemberCard";
import Clients from "../../components/dashboard/Clients";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const projects = [
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-03-15",
    members: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
  },
  {
    name: "Mobile App Development",
    type: "Mobile Application",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
  },
  {
    name: "Marketing Campaign",
    type: "Marketing",
    date: "2024-04-25",
    members: ["Grace", "Henry", "Ivy"],
    files: 1,
    progress: 18,
  },
  {
    name: "Product Launch",
    type: "Product Management",
    date: "2024-01-05",
    members: ["Jack", "Kelly", "Liam"],
    files: 2,
    progress: 6,
  },
];

const members = [
  {
    total_members: 4,
    job: "UI Designer",
  },
  {
    total_members: 8,
    job: "Frontend Developer",
  },
  {
    total_members: 3,
    job: "Backend Developer",
  },
  {
    total_members: 6,
    job: "Mobile App Developer",
  },
];
const Home = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(4);

  let backendURL;
  if (process.env.NODE_ENV === "production") {
    backendURL = "https://kefa-ng.onrender.com/api/product";
  } else {
    backendURL = "http://localhost:8000/api/product";
  }
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backendURL}`);
      console.log(response.data);
      console.log(backendURL);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showAll = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStastics />
        <Platforms />
        <ProjectStastics />
        <Platforms />
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Work Plan</h1>
          <Link
            to="/board/plans"
            className="text-sm underline text-amber-800 hover:text-amber-900"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project) => <ProjectCard project={project} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Products</h1>
          <Link
            to="/board/products"
            className="text-sm underline  text-amber-800 hover:text-amber-900"
          >
            View all
          </Link>
        </div>

        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 items-center justify-center">
              {products.length > 0 ? (
                products.slice(0, visible).map((product, index) => {
                  return (
                    <div className="">
                      <HomeProduct
                        key={index}
                        Product={product}
                        getProducts={getProducts}
                      />
                    </div>
                  );
                })
              ) : (
                <div>There is no message</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Orders</h1>
          <Link
            to="/board/orders"
            className="cursor-pointer text-sm underline  text-amber-800 hover:text-amber-900"
          >
            View all
          </Link>
        </div>

        <div className="">
          <Clients />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Clients</h1>
          <Link
            to="/board/clients"
            className="text-sm underline text-amber-800 hover:text-amber-900"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {members && members.map((member) => <MemberCard member={member} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
