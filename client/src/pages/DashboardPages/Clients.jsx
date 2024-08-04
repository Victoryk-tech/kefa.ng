import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ClientData from "../../components/dashboard/data/ClientData";

const Clients = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let backendURL;
  if (process.env.NODE_ENV === "production") {
    backendURL = "https://kefa-ng.onrender.com/api/user/users";
  } else {
    backendURL = "http://localhost:8000/api/user/users";
  }
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backendURL}`);
      console.log(response.data);
      console.log(backendURL);
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-5 h-screen">
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="">
            <table className="bg-gray-50 border-b-2 border-gray-200 md:overflow-auto rounded-lg shadow hidden md:block md:w-[500px] lg:overflow-hidden lg:w-full">
              <thead>
                <tr>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    No
                  </th>
                  <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    L/Seen
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    D/reg
                  </th>

                  <th></th>
                </tr>
              </thead>
            </table>
            <div>
              {users.length > 0 ? (
                users.map((user, index) => {
                  return (
                    <div className="">
                      <ClientData
                        key={index}
                        Users={user}
                        getUsers={getProducts}
                      />
                    </div>
                  );
                })
              ) : (
                <div>There is no message</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
