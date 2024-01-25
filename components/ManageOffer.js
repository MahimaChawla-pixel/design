"use client";
import React, { useState } from "react";
import OfferBox from "@/components/OfferBox";

const ManageOffer = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className="w-1/2">
      <div className="mb-4 w-full">
        <div className="flex items-center w-full">
          <div
            className={` w-full managebtn flex items-center justify-center  h-14 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800 ${
              activeButton === 0 ? "active" : ""
            }`}
            onClick={() => handleButtonClick(0)}
          >
            Package<span>(3)</span>
          </div>
          <div
            className={` w-full managebtn flex items-center justify-center  h-14 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800 ${
              activeButton === 1 ? "active" : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            Pricing<span>(3)</span>
          </div>
          <div
            className={` w-full managebtn flex items-center justify-center h-14 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800 ${
              activeButton === 2 ? "active" : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Offers<span>(3)</span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <input
          className="h-14 border border-stone-300 rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for Offers"
        />
      </div>
      <div className="max-h-[600px] overflow-auto w-full p-2">
        <OfferBox
          imageUrl="/iphone.png"
          offerHeading="win iphone 11 pro"
          offerDesc="You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer."
        />
        <OfferBox
          imageUrl="/iphone.png"
          offerHeading="win iphone 11 pro"
          offerDesc="You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer."
        />
        <OfferBox
          imageUrl="/iphone.png"
          offerHeading="win iphone 11 pro"
          offerDesc="You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer."
        />
        <OfferBox
          imageUrl="/iphone.png"
          offerHeading="win iphone 11 pro"
          offerDesc="You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer."
        />
        <OfferBox
          imageUrl="/iphone.png"
          offerHeading="win iphone 11 pro"
          offerDesc="You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer."
        />
      </div>
    </div>
  );
};

export default ManageOffer;
