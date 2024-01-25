import React from "react";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="menu">
      <Image
        src="/logo-v.png"
        alt="logo"
        style={{
          width: "111px",
          height: "31px",
          marginTop: "61px",
          marginLeft: "35px",
        }}
        width={111}
        height={31}
      />
      <div className="mt-10">
        <a href="#seats" id="seats">
          <span>Seats</span>
        </a>
        <a href="#sales" id="sales">
          <span>Sales Members</span>
        </a>
        <a href="#Analytics" id="Analytics">
          <span>Analytics</span>
        </a>
        <a href="#chats" id="chats">
          <span>Chats & Tags</span>
        </a>
        <a href="#custom" id="custom">
          <span>Custom</span>
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
