import React from "react";
import picture4 from "../../assets/picture4.jpg";
import picture7 from "../../assets/picture7.jpg";
import picture8 from "../../assets/picture8.jpg";
import picture9 from "../../assets/picture9.jpg";
import picture11 from "../../assets/picture11.jpg";
import picture10 from "../../assets/picture10.jpg";
import picture12 from "../../assets/picture12.jpg";
import plastic from "../../assets/recycling.jpg";

const Resources = () => {
  return (
    <div>

      <div className="text-center">
        <h2 className="text-5xl font-bold pt-10 mb-20 text-teal-600">
          {" "}
          Sustainable Waste Management
        </h2>
      </div>

      <div
        className="grid grid-cols-3 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24 xl:grid-cols-4 ml-40 mr-40"
      >
        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture4}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
            <a href="https://books.google.com.gh/books?hl=en&lr=&id=iI7cBQAAQBAJ&oi=fnd&pg=PT20&dq=sustainable+solutions+waste+management&ots=SomgpceKDK&sig=dt21dadkvfOEZ7ftVTtH8At-z-w&redir_esc=y#v=onepage&q=sustainable%20solutions%20waste%20management&f=false" target="_blank">Sustainable Solutions</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Strategies and practices that prioritize the environment and your
            profit
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture7}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="https://smallbusiness.chron.com/make-money-plastic-bottles-12391.html" target="_blank">Profitable Opportunities</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Realize the potential earnings from selling your plastic waste
            responsibly
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture8}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="https://www.ghana-nrw.info/en/portfolio-item/creating-value-from-plastic-waste/" target="_blank">Transparent Transactions</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Experience a secure and straightforward process for selling and
            purchasing
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture9}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="https://books.google.com.gh/books?hl=en&lr=&id=wcsntD5V-aoC&oi=fnd&dq=environmental+education+on+waste&ots=111GyZl-oU&sig=pc1OKP-JcGG4LoCDWWH7do4-1f0&redir_esc=y" target="_blank">Environmental Education</a> 
          </h3>
          <p className="mt-4 text-gray-700">
            Expand your knowledge with our resources on plastic waste management
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture11}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="#" target="_blank">Global Reach</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Tap into a worldwide market committed to responsible plastic use and
            disposal
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture10}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="#" target="_blank">Collaborative Growth</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Grow alongside a community focused on creating sustainable value
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={plastic}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="https://isdsnet.com/ijds-v3n3-10.pdf" target="_blank">Challenges & Opportunities</a>
          </h3>
          <p className="mt-4 text-gray-700">
            Grow alongside a community focused on managing waste
          </p>
        </div>

        <div className="gallery-card flex flex-col">
          <img
            className="flex-grow rounded-lg object-cover"
            src={picture12}
            alt=""
          />
          <h3 className="primary-color-text mt-4 font-semibold text-green-700">
          <a href="https://www.sciencedirect.com/science/article/abs/pii/B9780323855143000142" target="_blank">Recycling Process</a> 
          </h3>
          <p className="mt-4 text-gray-700">
            Grow alongside a community focused on recycling
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
