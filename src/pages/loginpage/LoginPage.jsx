import React from "react";
import picture3 from '../../assets/picture3.jpg';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="bg-black/40 absolute top-0 left-0 items-center h-full w-full justify-center gap-y-10 flex flex-col">
          <h1 className="text-6xl text-white font-bold">
            Turn scraps into cash
          </h1>
          <p className="text-2xl text-white font-normal">
            Start for free and get exciting offers
          </p>
        </div>
        <img src={picture3} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 gap-y-10">
        <h1 className="text-4xl text-teal-600 font-extrabold ">Plastics Hub</h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-10">
            <h3 className="text-3xl font-semibold mb-2 ">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-10">
            <input
              type="email"
              placeholder="Email"
              className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
            />

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember Me</p>
              </div>

              <p className="text-sm cursor-pointer underline font-medium whitespace-nowrap underline-offset-2">
                Forgot Password ?
              </p>
            </div>

            <div className="w-full flex flex-col ">
              <button className="w-full text-[#060606] my-2 bg-white border-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer ">
                Log in
              </button>
            </div>
          </div>

          <div className=" flex flex-col gap-y-4 my-4 items-center ">
            <p className="text-sm font-normal text-[#060606]">
              Don't have an account?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer" onClick={() => navigate("/signup")}>
                Sign Up for free
              </span>
            </p>
            <p>or</p>
            <span className="font-semibold underline underline-offset-2 cursor-pointer" onClick={() => navigate("/register")}>
              Register as A Dealer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
