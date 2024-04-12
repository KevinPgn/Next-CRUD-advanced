"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { updateUserDB } from "@/server/Actions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const UserEdited = ({user}: any) => {
  const router = useRouter()

  const handleAction = (formData: FormData) => {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const number = formData.get('number') as string
    
    if (name.length < 3) return toast.error('Name must be at least 3 characters long!')
    if (!email.includes('@')) return toast.error('Invalid email!')
    if (number.length !== 10) return toast.error('Phone number must be 10 characters long!')
    
    try {
      toast.success('User updated successfully!')
      updateUserDB(user.id, formData)
    } catch (error) {
      toast.error('Failed to update user!')
    }
  }

  return <>
    <h1 className="text-2xl text-white text-center mb-5 mt-5">Edit User</h1>
    <form
      className="flex flex-col mx-auto max-w-2xl gap-5"
      action={handleAction}>
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

    <ToastContainer />
  </> 
}