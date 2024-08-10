import HeadOption from "../components/HeadOption";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CiDark, CiLight } from "react-icons/ci";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { UserAuth } from "../components/context/AuthContext";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const { email, password } = formData;
  const { Login } = UserAuth();
  const navigate = useNavigate();
  const [viewPwd, setViewPwd] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleViewPassword = () => {
    setViewPwd(!viewPwd);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = {
        email,
        password,
      };

      userData.email = userData.email.toLowerCase();
      await Login(userData);
      console.log(userData);

      // location.reload();

      toast.success("Logged in Successfully");
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <HeadOption />
      <section className="bg-gray-50 min-h-screen flex items-start py-10 sm:pt-0 sm:items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#6b4343]">Welcome Back</h2>
            <p className="text-xs mt-4 text-[#6b4343]">
              If you are already a member, easily log in
            </p>

            <form
              onSubmit={handleLogin}
              action="POST"
              class="flex flex-col gap-4"
            >
              <div className="bg-white flex items-center justify-between mt-8 p-2 rounded-xl border w-full">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="outline-none bg-transparent"
                  required
                />
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl border w-full bg-white">
                <input
                  type={viewPwd ? "password" : "text"}
                  id="changePwd"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="outline-none bg-transparent"
                />
                <span
                  onClick={handleViewPassword}
                  className=" text-brown transition-transform  duration-300 cursor-pointer"
                >
                  {viewPwd ? <LuEyeOff /> : <LuEye />}
                </span>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="bg-[#6b4343] hover:bg-transparent hover:text-[#6b4343] hover:border-[#6b4343] hover:border-[1px] transition-all ease-out rounded-xl text-white py-2 hover:scale-100 duration-300"
              >
                {" "}
                {loading ? "Loading...Please wait!" : "LOGIN"}
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400"></hr>
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400"></hr>
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#6b4343]">
              Login with Google
            </button>

            <div className="mt-5 text-xs border-b border-[#6b4343] py-4 text-[#6b4343]">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#6b4343]">
              <p>Don't have an account?</p>
              <Link
                to="signup"
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 hover:text-[#6b4343] hover:border-[#6b4343] hover:bg-transparent hover:border-[1px]"
              >
                Register
              </Link>
            </div>
            <Link to={"/"} className="text-sm underline" onClick={scrollToTop}>
              go back?
            </Link>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
