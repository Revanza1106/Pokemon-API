import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    function gotohome(){
        navigate("/")
    }
    function gotopokemon(){
        navigate("/pokemon")
    }
  return (
    <div className="flex mx-auto items-center justify-center h-24 px-4  bg-black ">
        <h1 className="font-bold text-4xl w-full text-yellow-100">Pokemon<span className="text-yellow-200">ku</span></h1>
      <ul className="hidden md:flex font-semibold text-xl">
        <li className="p-4  hover:text-yellow-100 text-yellow-200" onClick={gotohome}>Home</li>
        <li className="p-4 hover:text-yellow-100 text-yellow-200">About</li>
        <li className="p-4 hover:text-yellow-100 text-yellow-200" onClick={gotopokemon}>Pokemon</li>
        <li className="p-4 hover:text-yellow-100 text-yellow-200">Contact</li>
      </ul>
      <ul className="font-semibold text-xl flex md:hidden">
      <li className="p-1  hover:text-yellow-100 text-yellow-200" onClick={gotohome}>Home</li>
      <li className="p-1 hover:text-yellow-100 text-yellow-200" onClick={gotopokemon}>Pokemon</li>
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
