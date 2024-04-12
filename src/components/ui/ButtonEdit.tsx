import { useRouter } from "next/navigation";
import { Button } from "./button"
import { FaRegEdit } from "react-icons/fa";


export const ButtonEdit = ({id}: any) => {
  const router = useRouter()

  return <>
  <Button
  className="flex gap-1 items-center"
  onClick={() => router.push(`/edit/${id}`)}
  variant="edit">
    <FaRegEdit /> Edit
  </Button>
  </>
}