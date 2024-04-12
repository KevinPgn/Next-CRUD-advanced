"use client"
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./button";

export const ButtonCreate = () => {
  const router = useRouter();
  return <>
    <Button 
    onClick={() => router.push("/create")}
    variant="secondary" className="flex gap-2"><FaPlus /> Add User</Button>
  </>;
};