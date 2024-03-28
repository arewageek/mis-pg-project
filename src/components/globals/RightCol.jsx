import {
  FaArrowRight,
  FaDownload,
  FaFolder,
  FaRegBell,
  FaUpload,
} from "react-icons/fa";

import { auth, clerkClient, UserButton } from "@clerk/nextjs";

export const RightCol = async () => {
  const { userId } = auth();

  const user = await clerkClient.users.getUser(userId);

  const username = `${user.firstName} ${user.lastName}`;
  return (
    <div className="w-full lg:w-1/4">
      <div className="space-x-2 bg-white shadow rounded-xl p-10">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex space-x-2 items-center">
            <span>
              <UserButton />
            </span>
            <span className="font-[450] text-sm">{username}</span>
          </div>
          <div>
            <span className="text-lg">
              <FaRegBell />
            </span>
          </div>
        </div>

        <div className="my-10">
          <div className="flex justify-between">
            <div className="">
              <h3 className="font-bold text-xl">Data Storage</h3>
              <p className="text-xs">Photos, Videos, Documents</p>
            </div>

            <div className="flex justify-center items-center space-x-1 cursor-pointer">
              <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
              <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
              <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
            </div>
          </div>

          <div className="my-10 w-40 h-40 shadow-lg text-xs font-bold mx-auto flex justify-center items-center">
            {/* chart section */}
            Chart Section
          </div>
        </div>

        <div className="my-10 flex justify-between space-x-4 items-center">
          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="p-2 lg:p-3 lg:text-sm bg-purple-600 rounded-lg text-white">
              <FaUpload />
            </div>
            <div className="flex flex-col space-y-0">
              <h4 className="font-bold lg:text-lg text-sm">10.32GB</h4>
              <p className="lg:text-[10pt] text-[8pt] font-light capitalize">
                upload
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="p-2 lg:p-3 lg:text-sm bg-pink-600 rounded-lg text-white">
              <FaDownload />
            </div>
            <div className="flex flex-col space-y-0">
              <h4 className="font-bold lg:text-lg text-sm">3.35GB</h4>
              <p className="lg:text-[10pt] text-[8pt] font-light capitalize">
                download
              </p>
            </div>
          </div>

          <div>
            <div className="lg:p-3 p-2 bg-indigo-600 rounded-lg text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="my-10">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Shared Cloud</h3>
            <span className="text-xs text-purple-600">+Add New</span>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-center shadow-md py-4 px-3 border-[1px] border-gray-300">
              <div className="flex items-center">
                <div className="px-3 py-3 text-lg text-purple-600 bg-purple-200 rounded-lg">
                  <FaFolder />
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl space-y-2">
                <h5 className="font-bold text-lg">Documents</h5>
                <span className="text-xs">125GB</span>
              </div>
              <div className="flex flex-col justify-end items-end space-y-1 cursor-pointer w-full">
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>

            <div className="flex space-x-4 items-center shadow-md py-4 px-3 border-[1px] border-gray-300">
              <div className="flex items-center">
                <div className="px-3 py-3 text-lg text-indigo-600 bg-indigo-200 rounded-lg">
                  <FaFolder />
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl space-y-2">
                <h5 className="font-bold text-lg">Videos</h5>
                <span className="text-xs">125GB</span>
              </div>
              <div className="flex flex-col justify-end items-end space-y-1 cursor-pointer w-full">
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>

            <div className="flex space-x-4 items-center shadow-md py-4 px-3 border-[1px] border-gray-300">
              <div className="flex items-center">
                <div className="px-3 py-3 text-lg text-pink-600 bg-pink-200 rounded-lg">
                  <FaFolder />
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl space-y-2">
                <h5 className="font-bold text-lg">Pictures</h5>
                <span className="text-xs">125GB</span>
              </div>
              <div className="flex flex-col justify-end items-end space-y-1 cursor-pointer w-full">
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
