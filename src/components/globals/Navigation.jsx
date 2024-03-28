import Link from "next/link";
import { FaList } from "react-icons/fa";

export const Navigation = () => {
  return (
    <div className="w-full px-5 py-4 flex justify-between items-center bg-white text-black shadow">
      <Link href="/" className="text-lg font-bold">
        PostGrad
      </Link>

      {/* <div className="hidden text-sm font-[450] lg:flex items-center justify-end space-x-4">
        <Link href="/">Upload</Link>
        <Link href="/">Upload</Link>
        <Link href="/">Upload</Link>
      </div> */}
      <div className="block lg:hidden">
        <FaList />
      </div>
    </div>
  );
};
