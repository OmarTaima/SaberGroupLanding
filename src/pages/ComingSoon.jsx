import React from "react";
import Saber GroupLogo from "../assets/logos/Saber Group Logo.png";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <img
          src={Saber GroupLogo}
          alt="Saber Group Logo"
          className="mx-auto h-28 w-auto object-contain"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Coming Soon
        </h1>

        <p className="text-lg text-gray-600">
          We're working on something great. Stay tuned — we'll be live soon.
        </p>

       
      </div>
    </div>
  );
};

export default ComingSoon;
