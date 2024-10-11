"use client"
import React from 'react'
import {useRouter} from "next/navigation"
import {useState,useEffect} from 'react'
import {useSession} from 'next-auth/react'
import Form from "@components/Form"
import { set } from 'mongoose'
const page = () => {
    const router=useRouter()
    const{data:session}=useSession()
    const [post,setPost]=useState({prompt:"",tag:""})
    const uploadPrompt=async()=>{
        const response=await fetch("/api/prompt/new",{
            method:"POST",
            body:JSON.stringify({
              userId:session?.user.id,
              prompt:post.prompt,
              tag:post.tag})
        })
        if(response.ok){
            router.push("/")
        }
    }
    useEffect(()=>{
      console.log(post)
    },[post])
  return (
    <div className="">
      <div className="px-10">
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Create Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
         share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      </div>
      <Form uploadPrompt={uploadPrompt} setPost={setPost} />

    </div>
  )
}

export default page