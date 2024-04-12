"use server"

import {z} from "zod"
import {prisma} from "../lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const createSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  number: z.string().min(10).max(10),
})

export const createUserDB = async (formData: FormData) => {
  const result = createSchema.safeParse(Object.fromEntries(formData.entries()))
  
  if (!result.success) {
    return result.error.formErrors.fieldErrors
  }

  const data = result.data

  if (!data) {
    return
  }

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      number: data.number,
    },
  })

  revalidatePath('/')
  redirect('/')
}

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      number: true,
      createdAt: true,
    },
  }) 
    
  return users
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: {
      id,
    },
  })

  revalidatePath('/')
  redirect('/')
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },

    select: {
      id: true,
      name: true,
      email: true,
      number: true,
      createdAt: true,
    },
  })

  return user
}

const updateSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  number: z.string().min(10).max(10),
})

export async function updateUserDB(id: string, formData: FormData) {
  const result = updateSchema.safeParse(Object.fromEntries(formData.entries()))
  
  if (!result.success) {
    return result.error.formErrors.fieldErrors
  }

  const data = result.data

  if (!data) {
    return
  }

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      email: data.email,
      number: data.number,
    },
  })

  revalidatePath('/')
  redirect('/')
}
