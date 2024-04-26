import React from "react";
import picture3 from "../../assets/picture3.jpg";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  
  return (
    <div className="w-full h-screen flex items-start gap-20">
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

      <div className="w-full flex flex-col max-w-[500px] mt-20 justify-center">
        <div className="w-full flex flex-col mb-10">
          <h3 className="text-3xl font-semibold mb-2 ">Sign Up</h3>
          <p className="text-base mb-2">Please enter your details</p>
        </div>

        <div className="w-full flex flex-col gap-y-10">
          <input
            type="text"
            placeholder="First Name"
            className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
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

          <button className="font-semibold text-black underline-offset-2 cursor-pointer w-36 h-10" onClick={() => navigate("/dealercard")}>
            Submit 
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
