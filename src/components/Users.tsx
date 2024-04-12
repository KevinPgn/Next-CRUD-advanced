import { getUsers } from "@/server/Actions"
import { UsersList } from "./UsersList"

export const Users = async () => {
  const users = await getUsers()

  return <>
  <UsersList users={users}/>
  </>
}