import React from "react";
import BgImage from '../images/bg-subscribe.png';
import Billing from './Billing';
import { NavLink } from "react-router-dom";

function Subscribe() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute opacity-60 inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={BgImage}
          alt="Background"
        />
      </div>
      <div className="relative bg-black opacity-90 p-8 rounded shadow-md">
        <h2 className="text-2xl text-white font-bold ">Subscribe Now!</h2>
        <h6 className="text-sm text-white flex justify-center mb-4"><u>7-day free trial</u></h6>

        <form>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="First and Last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <NavLink to='/billing'>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Subscribe
            </button>
            </NavLink>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;