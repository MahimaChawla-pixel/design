import React from "react";
import Image from "next/image";
import LeftSideChips from "./LeftSideChips";

const LeftSidebar = () => {
  return (
    <div className="w-1/6 bg-gradient-to-r from-violet-600 to-violet-700 rounded-sm p-7 flex flex-col items-center sticky top-0 h-screen">
      <Image
        src="/logo-v.png"
        alt="logo"
        style={{
          width: "111px",
          height: "31px",
          marginTop: "35px",
        }}
        width={111}
        height={31}
      />
      <div className="mt-16">
        <LeftSideChips imageUrl="/chats.svg" Text="Seats" />
        <LeftSideChips imageUrl="/chats.svg" Text="Sales Members" />
        <LeftSideChips imageUrl="/chats.svg" Text="Analytics" />
        <LeftSideChips imageUrl="/chats.svg" Text="Chats & Tags" />
        <LeftSideChips imageUrl="/chats.svg" Text="Custom" />
      </div>
    </div>
  );
};

export default LeftSidebar;
