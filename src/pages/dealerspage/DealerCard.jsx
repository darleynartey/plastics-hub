import React from "react";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d4 from "../../assets/d4.jpg";
import d14 from "../../assets/d14.jpg";
import d6 from "../../assets/d6.jpg";
import d15 from "../../assets/dealer15.jpg";
import d16 from "../../assets/d16.jpg";
import d9 from "../../assets/d9.jpg";
import d10 from "../../assets/d10.jpg";
import d11 from "../../assets/d11.jpg";
import d12 from "../../assets/d12.jpg";
import d13 from "../../assets/d13.jpg";
import avatar from "../../assets/welcome.jpg";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";

const DealerCard = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#EEEEE9]">
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl font-extrabold mr-4 sm:text-3xl text-teal-900 ">
            PLASTICS HUB
          </h1>
          <div>
          <input
            type="text"
            className="border border-teal-300 p-2 w-96 rounded-l-lg items-center focus:outline-none"
            placeholder="Search..." 
          />
          <button
            className=" text-black p-2  rounded-r-lg w-24"
            id="searchButton"
          >
            Search
          </button>
          </div>
         <div className="flex flex-col">
          <img
            className="inline-block h-20 w-20 mt-0 mr-8 ml-8 mb-auto rounded-full ring-2 ring-white object-cover"
            src={avatar}
            alt="user avatar"
          />
          <h5 className="inline-block mr-0 ml-auto mb-auto font-bold text-teal-900" >Welcome to plastics hub</h5>
        </div>
        </div>

        

        <h1 className="text-4xl font-extrabold mb-4 text-teal-600 p-10">
          Plastic Bottle Dealers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-14">
          <div className="relative">
            <img
              src={d1}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4 items-center">
              <h3 className="text-lg font-semibold">Eric Asare</h3>
              <p className="text-lg text-zinc-600">Lashibi, Ghana</p>
              <p className="text-lg text-yellow-500">4.4</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d2}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Abigail Sika</h3>
              <p className="text-lg text-zinc-600">Madina, Ghana</p>
              <p className="text-lg text-yellow-500">4.2</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d4}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Abigail Oppong</h3>
              <p className="text-lg text-zinc-600">Kasoa, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d14}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Telvin Asamoah</h3>
              <p className="text-lg text-zinc-600">Ashaiman, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>
        </div>

        <h2 className=" text-4xl font-extrabold mb-4 text-teal-600 p-10">
          Cans & Cups Dealers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-14">
          <div className="relative">
            <img
              src={d6}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Tracey Boateng</h3>
              <p className="text-lg text-zinc-600">Teshie, Ghana</p>
              <p className="text-lg text-yellow-500">4.4</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d15}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Comfort Osei</h3>
              <p className="text-lg text-zinc-600">East Legon, Ghana</p>
              <p className="text-lg text-yellow-500">4.2</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d16}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Priscilla Opoku</h3>
              <p className="text-lg text-zinc-600">Ridge, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d9}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Elvin Boateng</h3>
              <p className="text-lg text-zinc-600">Ashaiman Lebanon, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold mb-4 text-teal-600 p-10">
          Polythene & Straw Dealers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-14">
          <div className="relative">
            <img
              src={d10}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Evarest Siaw</h3>
              <p className="text-lg text-zinc-600">Nungua, Ghana</p>
              <p className="text-lg text-yellow-500">4.4</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d11}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Isaiah Asamoah</h3>
              <p className="text-lg text-zinc-600">Cantonment, Ghana</p>
              <p className="text-lg text-yellow-500">4.2</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d12}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">Alfred Nartey</h3>
              <p className="text-lg text-zinc-600">Makola, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>

          <div className="relative">
            <img
              src={d13}
              alt=""
              className="rounded-lg shadow-xl h-80 w-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Theophilus Abdullah</h3>
              <p className="text-lg text-zinc-600">Madina, Ghana</p>
              <p className="text-lg text-yellow-500">4.3</p>
              <button className="w-24 mt-2 text-black" onClick={() => navigate("/dealerdetails")}>Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-0 ml-0">
        <Footer />
      </div>
    </div>
  );
};

export default DealerCard;
