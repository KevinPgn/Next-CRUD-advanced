import React from 'react'
import { getUserById } from '@/server/Actions'
import { UserEdited } from '@/components/UserEdited'

const EditUser = async ({params}: any) => {
  const userEdit = await getUserById(params.id)

  return (
    <UserEdited user={userEdit} />
  )
}

export default EditUser