import React from "react";
import Image from "next/image";

const OfferBox = ({ imageUrl, offerHeading, offerDesc }) => {
  return (
    <div className="bg-white px-3 py-2 flex gap-9 h-48 items-center border border-stone-300 mb-2 w-full">
      <div className="flex items-center justify-end"></div>
      <Image src={imageUrl} alt="notification" width={99} height={131} />
      <div>
        <span className="opacity-75 text-black text-2xl font-bold  uppercase leading-relaxed">{offerHeading}</span>
        <p className="w-full  opacity-90 text-zinc-600 text-[15px]  capitalize">{offerDesc}</p>
      </div>
    </div>
  );
};

export default OfferBox;
