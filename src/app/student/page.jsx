import { Files } from "@/components/tables/Files";
import { Progress } from "@/components/ui/progress";
import { FaFileArchive, FaFolder, FaImage, FaListAlt } from "react-icons/fa";
import Link from "next/link";

export default function StudentDashboard() {
  const recentUploads = [
    {
      preview:
        "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?cs=srgb&dl=pexels-scott-webb-430207.jpg&fm=jpg",
      title: "Image title.png",
      icon: <FaImage />,
    },
    {
      preview:
        "https://www.shutterstock.com/shutterstock/photos/573952828/display_1500/stock-vector-abstract-geometric-pattern-with-lines-rhombuses-a-seamless-vector-background-blue-black-and-gold-573952828.jpg",
      title: "Image title.png",
      icon: <FaImage />,
    },
    {
      preview:
        "https://t3.ftcdn.net/jpg/02/77/30/98/360_F_277309825_h8RvZkoyBGPDocMtippdfe3497xTrOXO.jpg",
      title: "Image title.png",
      icon: <FaImage />,
    },
    {
      preview:
        "https://www.freevector.com/uploads/vector/preview/8058/FreeVector-Square-Patterns-Set.jpg",
      title: "Image title.png",
      icon: <FaImage />,
    },
  ];

  return (
    <main className="flex flex-col lg:flex-row p-4">
      <div className="w-full lg:w-3/4 space-x-2 px-5 flex flex-col space-y-10">
        <div className="py-4">
          <h2 className="font-bold text-3xl mb-2 text-black">File Manager</h2>
          <p className="text-sm text-gray-700">
            Upload and manage project submission
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center mb-4">
            <h3 className="font-bold text-2xl text-black">My Uploads</h3>
            <select
              name="filter"
              id="filter"
              className="text-xs text-gray-700 bg-transparent p-2"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 w-full">
            <div className="w-full lg:w-1/3 lg:pr-4 py-3">
              <div className="rounded-lg bg-white px-6 py-6 w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="p-4 rounded-lg bg-purple-200 text-purple-700 text-2xl">
                      <FaFolder />
                    </div>
                  </div>

                  <div className="flex justify-center items-center space-y-1 flex-col cursor-pointer">
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                  </div>
                </div>
                <div className="mt-8">
                  <h5 className="font-bold text-xl mb-2 text-black">
                    Documents
                  </h5>
                  <div>
                    <Progress
                      value={34}
                      background="bg-purple-500"
                      className="bg-purple-200"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600">17 files</p>
                    <p className="font-bold text-black">789 MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 lg:pr-4 py-3">
              <div className="rounded-lg bg-white px-6 py-6 w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="p-4 rounded-lg bg-purple-200 text-pink-500 text-2xl">
                      <FaFolder />
                    </div>
                  </div>

                  <div className="flex justify-center items-center space-y-1 flex-col cursor-pointer">
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                  </div>
                </div>
                <div className="mt-8">
                  <h5 className="font-bold text-xl mb-2 text-black">Photos</h5>
                  <div>
                    <Progress
                      value={34}
                      background="bg-pink-500"
                      className="bg-pink-200"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600">17 files</p>
                    <p className="font-bold text-black">789 MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 lg:pr-4 py-3">
              <div className="rounded-lg bg-white px-6 py-6 w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="p-4 rounded-lg bg-blue-200 text-blue-500 text-2xl">
                      <FaFolder />
                    </div>
                  </div>

                  <div className="flex justify-center items-center space-y-1 flex-col cursor-pointer">
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                  </div>
                </div>
                <div className="mt-8">
                  <h5 className="font-bold text-xl mb-2 text-black">Videos</h5>
                  <div>
                    <Progress
                      value={34}
                      background="bg-blue-500"
                      className="bg-blue-200"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600">17 files</p>
                    <p className="font-bold text-black">789 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <h2 className="font-bold text-xl mb-2 text-black">Quick Access</h2>
          <p className="text-xs text-gray-700">Access recent uploads</p>
          <div className="mt-5 flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-5">
            {recentUploads.map((file, index) => (
              <div className="w-full lg:w-1/4 lg:pr-2 " key={index}>
                <div className="w-full rounded-xl overflow-hidden bg-white shadow">
                  <img
                    src={file.preview}
                    alt="recent upload"
                    className="h-[100pt] w-full object-center"
                  />
                  <div className="py-3 px-4 text-sm text-gray-600 flex items-center space-x-3">
                    <span className="text-lg text-purple-600">{file.icon}</span>
                    <span className="text-sm font-[450]">{file.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl mb-2 text-black">File</h2>
            <Link href="/uploads" className="text-xs text-gray-500">
              View All
            </Link>
          </div>
          <div className="mt-5 flex flex-col lg:flex-row space-x-3">
            <Files />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 space-x-2 bg-white shadow rounded-lg p-10"></div>
    </main>
  );
}
