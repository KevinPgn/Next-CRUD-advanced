"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ButtonDelete } from "./ui/ButtonDelete";
import { ButtonEdit } from "./ui/ButtonEdit";

export const UsersList = ({ users }: any) => {
  
  return (
    <>
      <Table className="mt-5">
        <TableCaption>A list of users for CRUD operators.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[350px] text-white">ID</TableHead>
            <TableHead className="text-white">Full Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Phone Number</TableHead>
            <TableHead className="text-white">Create At</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell className="text-white">{user.id}</TableCell>
              <TableCell className="text-white">{user.name}</TableCell>
              <TableCell className="text-white">{user.email}</TableCell>
              <TableCell className="text-white">{user.number}</TableCell>
              <TableCell className="text-white">
                {new Date(user.createdAt).toLocaleString("us-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="flex gap-2">
                <ButtonDelete id={user.id}/>
                <ButtonEdit id={user.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
