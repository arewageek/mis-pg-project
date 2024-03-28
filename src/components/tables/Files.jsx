import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Files = () => {
  return (
    <div className="w-full bg-white shadow-lg p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-3">Name</TableHead>
            <TableHead className="px-3">Size</TableHead>
            <TableHead className="px-3">Last Modified</TableHead>
            <TableHead className="px-3">Format</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium px-3">File Name</TableCell>
            <TableCell className="px-3">12.5 MB</TableCell>
            <TableCell className="px-3">2 weeks ago</TableCell>
            <TableCell className="px-3">PDF</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
