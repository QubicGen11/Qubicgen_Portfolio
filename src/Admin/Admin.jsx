import { useState, useEffect } from 'react';
// import a from "next/a"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
// import '../../app/globals.css'

export function Admin() {
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/fetchData')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    (<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-yellow-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <a className="flex items-center gap-2 font-semibold" href="#">
              <UsersIcon className="h-6 w-6" />
              <span className="">Contact Form Data</span>
            </a>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-white-500 " />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search individuals..."
                  type="search" />
              </div>
              <div className="mt-4">
                <Label htmlFor="filter">Filter by Type</Label>
                <Select className="mt-2" id="filter">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clients">Clients</SelectItem>
                    <SelectItem value="students">Students</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-yellow-100/40 px-6">
          <a className="lg:hidden" href="#">
            <UsersIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-yellow-500" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 "
                  placeholder="Search individuals..."
                  type="search" />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  {/* <TableHead></TableHead> */}
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
  { data.map((item, index) => (
    <TableRow key={index}>
      <TableCell className="font-medium">{item.lastName}</TableCell>
      <TableCell>{item.email}</TableCell>
      {/* <TableCell>{item.firstName}</TableCell> */}
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.address}</TableCell>
      <TableCell>{item.jobTitle}</TableCell>
    </TableRow>
  ))}
</TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}

export default Admin;