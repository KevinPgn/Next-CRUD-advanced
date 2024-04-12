"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { updateUserDB } from "@/server/Actions"

export const UserEdited = ({user}: any) => {
  const router = useRouter()

  return <>
    <h1 className="text-2xl text-white text-center mb-5 mt-5">Edit User</h1>
    <form
      className="flex flex-col mx-auto max-w-2xl gap-5"
      action={() => updateUserDB(user.id, new FormData)}>
      <Input
        className="bg-transparent border-b-2 border-gray-300 text-[17px] text-white p-7"
        defaultValue={user.name}
        type="text"
        placeholder="Name"
        name="name"
      />
      <Input
        className="bg-transparent border-b-2 border-gray-300 text-[17px] text-white p-7"
        defaultValue={user.email}
        type="email"
        placeholder="Email"
        name="email"
      />
      <Input
        className="bg-transparent border-b-2 border-gray-300 text-[17px] text-white p-7"
        defaultValue={user.number}
        type="text"
        placeholder="Phone Number"
        name="number"
      />
      <div className="flex gap-2">
        <Button className="w-[100px]" variant="outline" type="submit">Submit</Button>
        <Button onClick={() => router.push('/')} className="w-[100px]" variant="destructive" type="reset">Cancel</Button>
      </div>
    </form>
  </> 
}