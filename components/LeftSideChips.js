import React from "react";
import Image from "next/image";

const LeftSideChips = ({ imageUrl, Text, active }) => {
  return (
    <a className="relative w-56 h-14 opacity-80 rounded-3xl border border-white border-opacity-30  text-slate-50 text-base font-medium  flex items-center justify-center mt-4 gap-[0.4rem] ">
      <Image src={imageUrl} alt="seats" width={17} height={17} />
      {Text}
    </a>
  );
};

export default LeftSideChips;
