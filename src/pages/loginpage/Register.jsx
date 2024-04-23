import React from "react";
import login from "../../assets/login5.jpg";

const Register = () => {
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
        <img src={login} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex flex-col max-w-[500px] mt-5">
        <div className="w-full flex flex-col mb-10">
          <h3 className="text-3xl font-semibold mb-2 ">Register As A Dealer</h3>
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
            type="text"
            placeholder="Enter Your Location"
            className="w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
          <input
            type="number"
            placeholder="Phone Number"
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

          <span className="font-semibold underline underline-offset-2 cursor-pointer">
            Register as A Dealer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
