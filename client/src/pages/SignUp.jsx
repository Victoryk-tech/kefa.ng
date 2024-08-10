import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LuEye, LuEyeOff } from "react-icons/lu";

import { UserAuth } from "../components/context/AuthContext";
import { toast } from "react-toastify";
import HeadOption from "../components/HeadOption";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();
  const [viewPwd, setViewPwd] = useState(false);
  const errRef = useRef();
  const { Register } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const togglePwd = () => {
    const changePwd = document.getElementById("Viewpwd");
    const isPassword = changePwd.getAttribute("type") === "password";

    changePwd.setAttribute("type", isPassword ? "text" : "password");
    setViewPwd(!viewPwd);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = {
        email,
        password,
        role,
        username,
      };

      userData.email = userData.email.toLowerCase(); //convert email to lower case
      await Register(userData);
      setLoading(false);
      if (role === "customer") {
        navigate("/shop");
      } else {
        navigate("/board");
      }

      location.reload();
      toast.success("Registered Successfully");
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <HeadOption />
      <section class="bg-gray-50 min-h-screen flex items-start py-10 sm:pt-0 sm:items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#6b4343]">Sign Up</h2>
            <p class="text-xs mt-4 text-[#6b4343]">
              If you are already a member, easily log in
            </p>

            <form onSubmit={handleRegister} class="flex flex-col gap-4">
              <div class="bg-white flex items-center justify-between mt-8 p-2 rounded-xl border w-full">
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  value={username || ""}
                  autoComplete="on"
                  autoSave="on"
                  placeholder="Name"
                  className="outline-none bg-transparent"
                />
              </div>
              <div class="bg-white flex items-center justify-between p-2 rounded-xl border w-full">
                <input
                  type="email"
                  name="email"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="on"
                  autoSave="on"
                  placeholder="Email"
                  className="outline-none bg-transparent"
                />
              </div>

              <div class="flex items-center justify-between p-2 rounded-xl border w-full bg-white">
                <input
                  type="password"
                  name="password"
                  id="Viewpwd"
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="on"
                  autoSave="on"
                  placeholder="Password"
                  className="outline-none bg-transparent"
                />
                <span
                  onClick={togglePwd}
                  className=" text-brown transition-transform  duration-300"
                >
                  {viewPwd ? <LuEye /> : <LuEyeOff />}
                </span>
              </div>
              {/* role */}

              <div className="">
                <label htmlFor="Role" className="block">
                  Select Role:
                </label>
                <span className="">
                  <input
                    type="radio"
                    name="role"
                    value={`customer` || ""}
                    onChange={handleRole}
                    checked={role === "customer"}
                  />
                  <label htmlFor="" className="px-1 font-bold">
                    {" "}
                    Customer{" "}
                  </label>
                </span>
                <span className="pl-2">
                  <input
                    type="radio"
                    name="role"
                    value={`admin` || ""}
                    onChange={handleRole}
                    checked={role === "admin"}
                  />
                  <label htmlFor="" className="px-1 font-bold">
                    Admin
                  </label>
                </span>
              </div>

              <button
                type="submit"
                class="bg-[#6b4343] hover:bg-transparent hover:text-[#6b4343] hover:border-[#6b4343] hover:border-[1px] transition-all ease-out rounded-xl text-white py-2 hover:scale-100 duration-300"
              >
                {" "}
                {loading ? "Loading...please wait..." : "CREATE ACCOUNT"}
              </button>
            </form>

            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-400"></hr>
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-400"></hr>
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#6b4343]">
              SignUp with Google
            </button>

            <div class="mt-5 text-xs border-b border-[#6b4343] py-4 text-[#6b4343]">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#6b4343]">
              <p>Already have an account?</p>
              <Link
                to="login"
                class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 hover:text-[#6b4343] hover:border-[#6b4343] hover:bg-transparent hover:border-[1px]"
              >
                Login
              </Link>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
