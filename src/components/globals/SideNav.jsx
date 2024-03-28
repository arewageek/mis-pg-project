import { BsAppIndicator } from "react-icons/bs";
import { FaHome, FaUpload } from "react-icons/fa";
import Link from "next/link";

export const SideNav = () => {
  const menu = [
    { label: "dashboard", path: "/", icon: <FaHome /> },
    { label: "uploads", path: "/uploads", icon: <FaUpload /> },
  ];

  return (
    <div className="py-5 px-4">
      <div className="rounded-xl bg-white shadow w-full py-3 px-5 flex flex-col space-y-10">
        <div className="my-4 space-x-3 flex items-center">
          <span>
            <BsAppIndicator />
          </span>
          <span className="font-bold text-sm items-center">PostGrad MIS</span>
        </div>

        <div className="my-4 flex flex-col space-y-3">
          {menu.map((menu) => (
            <Link
              key={menu.label}
              href={menu.path}
              className="flex items-center space-x-3 py-4 hover:text-purple-800 px-3 w-full  transition duration-300 capitalize"
            >
              <span>{menu.icon}</span>
              <span className="font-bold text-sm items-center">
                {menu.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
