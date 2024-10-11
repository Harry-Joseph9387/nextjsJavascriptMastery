"use client"
import React from 'react'
import Form from '@components/Form'
import {useSearchParams} from "next/navigation"
import {useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'
const updatePost = () => {
  const params=useSearchParams()
  const router=useRouter()
  const [post,setPost]=useState([])
  const fetching=async()=>{
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString); 
    const id = urlParams.get('id'); 
    const response=await fetch(`/api/prompt/${id}`,{method:"GET"})
    const data=await response.json()
    setPost(data[0])
  }
  const uploadEditedPrompt=async()=>{
    if(post){
    const response=fetch(`/api/prompt/${post._id.toString()}`,{method:"PATCH",
      body:JSON.stringify({
        prompt:post.prompt,
        tag:post.tag
      })})
    console.log(response.ok)
    router.push('/profile')  
    }
  }
  useEffect(()=>{
    fetching()
  },[])
  return (
    <div className="">
        <div className="px-10">
            <h2 className='text-3xl'>Update post</h2>
            <h2>as;ldaskdl as ds dkas das lkd l sd</h2>
        </div>
        <Form post={post} setPost={setPost} uploadPrompt={uploadEditedPrompt}/>
    </div>
  )
}

export default updatePost