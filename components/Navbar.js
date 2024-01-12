import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end gap-3">
      <Image src="/notification.svg" alt="notification" width={40} height={28} />
      <Image src="/help.svg" alt="notification" width={40} height={28} />
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center" >
        <Image src="/logout.png" alt="notification" width={17} height={17} />
        </div>
    </div>
  );
};

export default Navbar;