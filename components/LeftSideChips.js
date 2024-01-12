import React from "react";
import Image from "next/image";

const LeftSideChips = ({imageUrl,Text}) => {
  return (
    <div className="w-56 h-14 opacity-80 rounded-3xl border border-white border-opacity-30  text-slate-50 text-base font-medium  leading-relaxed flex items-center justify-center mt-3 gap-[0.4rem]">
    <Image src={imageUrl} alt="seats" width={17} height={17} />
   {Text}
  </div>
  );
};

export default LeftSideChips;