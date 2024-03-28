import { SideNav } from "@/components/globals/SideNav";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[300pt]">
        <SideNav />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
