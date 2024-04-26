import React from "react";
import image1 from "../../assets/deal1.jpg";

const DealersDetails = () => {
  return (
    <div>
      <div className="bg-neutral-400 p-8 rounded-lg shadow-lg w-1/3 h-2/6 items-center mt-14 ml-auto mr-auto align-baseline ">
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="What Can We Help You With?"
              className="w-full p-3 rounded-lg focus:outline-none"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-700 text-white w-full p-3 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Request Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default DealersDetails;
