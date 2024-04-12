import { deleteUser } from "@/server/Actions"
import { Button } from "./button"
import { MdDelete } from "react-icons/md";

export const ButtonDelete = ({id}: any) => {
  return <>
  <Button
  className="flex gap-1 items-center"
  onClick={() => deleteUser(id)}
  variant="destructive">
    <MdDelete /> Delete
  </Button>
  </>
}