"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from "next/navigation"
import {useState,useEffect} from 'react'
import PromptCard from "@components/PromptCard"
const profile = () => {
    const {data:session}=useSession()
    const [userPosts,setUserPosts]=useState([])
    const router=useRouter()
    const fetching=async()=>{
        const response=await fetch(`api/users/${session?.user.id}/posts`)
        const data=await response.json()
        setUserPosts(data)
    }
    const deletefunct=async(post)=>{
        const choice=confirm("delete?")
        if(choice){
            const response=await fetch(`/api/prompt/${post._id}`,{method:"DELETE"});
        }
    }
    const editfunct=(post)=>{
        router.push(`/update-post?id=${post._id}`)
    }
    useEffect(()=>{
        if(session?.user.id){fetching()}
    },[session])
  return (
    <div>
        <div className="px-5 py-5">
            <h2 className='text-3xl mb-10'>My Profile</h2>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius quo officia beatae aliquam temporibus nulla, quae aut doloremque. Repellendus asperiores consectetur nemo reiciendis eveniet possimus neque eos voluptatum. Obcaecati?</h2>
        </div>
        <div className="px-10 grid grid-cols-2 gap-10">
            {userPosts.map((post)=>{
                return(
                    <PromptCard post={post} deletefunct={deletefunct} editfunct={editfunct}/>
                )
            })}
        </div>
    </div>
  )
}

export default profile