"use client";
import React, { useState } from "react";
import Image from "next/image";
const CustomOffer = () => {
  return (
    <form className="w-1/2 rounded pb-8 mb-4">
      <div className="relative h-48 rounded-lg border border-stone-300 bg-gray-100 flex justify-center items-center mb-4">
        <div className="absolute">
          <div className="flex flex-col items-center">
            <Image src="/plus.svg" alt="notification" width={64} height={64} />
            <span class="block text-gray-400 font-normal">Upload a cover photo of offer</span>
            <span>Only JPG, PNG file types (Max 500kb)</span>
          </div>
        </div>
        <input type="file" class="h-full w-full opacity-0" name="" />
      </div>

      <div className="mb-4">
        <label className="block opacity-50 text-slate-800 text-xl font-normal  leading-7 mb-2">Type</label>
        <div className="flex items-center">
          <button className="w-52 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
            Package
          </button>
          <button className="w-52 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
            Pricing
          </button>
          <button className="w-52 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
            Discount
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-6">
        <div className="w-[245px]">
          <label className="block opacity-50 text-slate-800 text-xl font-normal  leading-7 mb-2" htmlFor="name">
            Title
          </label>
          <input
            className="h-14 border border-stone-300 rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none"
            id="name"
            type="text"
            placeholder="10% OFF"
            name="name"
          />
        </div>
        <div className="mb-4 w-[245px]">
          <label className="block opacity-50 text-slate-800 text-xl font-normal  leading-7 mb-2" htmlFor="name">
            Subtitle
          </label>
          <input
            className="h-14 border border-stone-300 rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none"
            id="name"
            type="text"
            placeholder="Off15kFeb"
            name="name"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block opacity-50 text-slate-800 text-xl font-normal  leading-7 mb-2">Description</label>
        <textarea
          id="textarea"
          className="resize-none border border-stone-300 rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Make a small deposit of ₹500 as a confirmation and avail ₹5000 discount in final booking."
          rows={5}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-violet-600 to-violet-700 text-white py-2 px-4 rounded-sm text-center">
          Create Offer
        </button>
      </div>
    </form>
  );
};

export default CustomOffer;
