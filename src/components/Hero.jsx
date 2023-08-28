import React from "react";

const Hero = () => {
  const img = "https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div>
      <div className="max-w-[800px] mt-[96px] w-full high-screen mx-auto text-center flex flex-col justify-center ">
        <p className="font-bold p-2 text-yellow-100 text-6xl">Welcome To Our <span className="text-yellow-200">Wolrd</span></p>
        </div>
    </div>
  );
};

export default Hero;
