"use client"
import { Button } from '@/components/ui/button'
import { ButtonSubmit } from '@/components/ui/ButtonSubmit'
import { Input } from '@/components/ui/input'
import { createUserDB } from '@/server/Actions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const createUser = () => {
  const router = useRouter()
  const [nameError, setNameError] = React.useState<string>('')
  const [emailError, setEmailError] = React.useState<string>('')
  const [numberError, setNumberError] = React.useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')?.toString() ?? ''
    const email = formData.get('email')?.toString() ?? ''
    const number = formData.get('number')?.toString() ?? '' // Convert to string

    if (name.length < 3) {
      setNameError('Name must be at least 3 characters')
      return
    }

    if (!email.includes('@')) {
      setEmailError('Invalid email')
      return
    }

    if (number.length !== 10) {
      setNumberError('Invalid phone number')
      return
    }

    try{
      toast.success('User created successfully')
      await createUserDB(formData)
    } catch (error) {
      toast.error('An error occurred')
    }
  }

  return <>
    <h2 className='text-white text-3xl font-bold text-center mt-10'>Create New User...</h2>
    <form onSubmit={handleSubmit} action={createUserDB} className='max-w-3xl mx-auto flex flex-col gap-5 mt-10'>
      <Input className='bg-transparent text-white p-7 text-md border-slate-600' placeholder='name' name='name'/>
      {nameError && <p className='text-red-500'>{nameError}</p>}
      <Input className='bg-transparent text-white p-7 text-md border-slate-600' placeholder='email' name="email"/>
      {emailError && <p className='text-red-500'>{emailError}</p>}
      <Input className='bg-transparent text-white p-7 text-md border-slate-600' placeholder='phone number' name='number'/>
      {numberError && <p className='text-red-500'>{numberError}</p>}
      <div className='flex gap-2'>
        <ButtonSubmit />
        <Button onClick={() => router.push('/')} className='w-20' variant="destructive" type="reset">Reset</Button>
      </div>
    </form>

    <ToastContainer />
  </>
}

export default createUser