import React from "react";
import Navbar from "../Navbar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="format p-4">{children}</div>
    </div>
  );
};

export default PrivateLayout;
