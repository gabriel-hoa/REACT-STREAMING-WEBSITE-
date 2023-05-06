import React from "react";
import BgImage from '../images/bg-subscribe.png';
import Movies from './Movies';
import {NavLink} from 'react-router-dom';

function Billing() {
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
          <h2 className="text-2xl text-white font-bold ">PAYMENT DETAILS</h2>
          <h6 className="text-sm text-white flex justify-center mb-4"><u>Debit only after 7 day free trial - Cancel anytime </u></h6>
  
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="cardholdername">
                Cardholder Name
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name on card"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="cardnumber">
                Card Number
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardnumber"
                type="text"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="expiry">
                Expiry date
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiry"
                type="expiry"
                placeholder="MM/YY"
              />
            </div>
              <div className="mb-6">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="cvv">
                Security Code
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="cvv"
                placeholder="CVV"
              />
            </div>
            <div className="flex items-center justify-between">
              <NavLink to='/movies'>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Pay Now!
              </button>
              </NavLink>
            </div>

         </form>
        </div>
      </div>
    );
  }
  
export default Billing;