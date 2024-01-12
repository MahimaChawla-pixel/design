import OfferBox from "@/components/OfferBox";
import React from "react";

const ManageOffer = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center mb-2">
        <button className="w-56 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
          Package<span>(3)</span>
        </button>
        <button className="w-56 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
          Pricing<span>(3)</span>
        </button>
        <button className="w-56 h-14 mx-2 py-2 px-4 rounded focus:outline-none border border-stone-300 bg-white text-slate-800">
          Offers<span>(3)</span>
        </button>
      </div>
      <div className="mb-2">
        <input
          className="h-14 border border-stone-300 rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for Offers"
        />
      </div>
      <div>
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
