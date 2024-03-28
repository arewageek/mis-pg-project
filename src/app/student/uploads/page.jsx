import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FaArrowLeft, FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function UploadsPage() {
  return (
    <main className="p-4">
      <div>
        <Button
          className="flex justify-between items-center space-x-3 border-[1px] border-gray-400 hover:bg-gray-900 hover:text-white transition"
          variant="ghost"
        >
          <span>
            <FaArrowLeft />
          </span>
          <span>Back to All Home</span>
        </Button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl text-black font-bold">Files and assets</h2>
        <p className="text-sm text-gray-500">
          Documents and attachements that have been uploaded as a part of your
          projects.
        </p>
      </div>
      <div className="my-10">
        <div className="border-gray-300 border-[1.3px] p-5 flex justify-center flex-col min-h-[200pt]">
          <div className="w-full lg:w-1/3 mx-auto">
            <div className="p-4 w-fit mx-auto my-4 text-lg rounded-full bg-gray-200 text-gray-700">
              <FaCloudUploadAlt />
            </div>
            <div className="text-sm text-center mx-auto">
              <b className="font-[450] underline">Click to upload</b> or drag
              and drop PDF, SVG, PNG, JPG, or Docx (max 120 MB)
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="border-gray-300 border-[1.3px] p-5 flex justify-center flex-col">
          <div className="w-full flex space-x-3 items-center">
            <div className="text-5xl px-5">
              <FaFilePdf />
            </div>
            <div className="flex flex-col space-y-1 w-full lg:w-4/5">
              <h5 className="font-bold text-lg">
                Some actual document title.pdf
              </h5>
              <p className="text-sm text-gray-600">23.4MB</p>
              <div className="w-full ">
                <Progress
                  value={80}
                  className="bg-gray-300"
                  background="bg-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-black">Attached Files</h3>
        <p className="text-gray-500 text-sm">
          Files and assets that have been previously attached to this project
        </p>
        <div className="my-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>File Size</TableHead>
                <TableHead>Date Uploaded</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">File actual name</TableCell>
                <TableCell>23.4 MB</TableCell>
                <TableCell>23rd March, 2024</TableCell>
                <TableCell>Draft</TableCell>
                <TableCell className="text-xs font-bold text-purple-600 cursor-pointer">
                  View
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">File actual name</TableCell>
                <TableCell>23.4 MB</TableCell>
                <TableCell>23rd March, 2024</TableCell>
                <TableCell>Draft</TableCell>
                <TableCell className="text-xs font-bold text-purple-600 cursor-pointer">
                  View
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
