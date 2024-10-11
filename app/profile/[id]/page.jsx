"use client"
import React from 'react'
import {useSearchParams} from 'next/navigation'
import {useEffect,useState} from 'react'
import PromptCard from '@components/PromptCard'
const otherProfile = ({params}) => {
    const searchParams=useSearchParams()
    const username=searchParams.get('username')
    const [allpost,setAllPosts]=useState([])
    const fetching=async()=>{
        const response=await fetch(`/api/users/${params?.id}/posts`)
        const data=await response.json()
        setAllPosts(data)
    }
    useEffect(()=>{
        fetching()
    },[])
  return (
    <div className='px-10 py-5'>
        <div className="mb-10">
            <h2 className="text-3xl mb-5">{username}'s profile</h2>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia nihil repudiandae excepturi porro iusto, explicabo cum similique? Est velit magni modi deserunt quis dolorum quod at aliquam, commodi enim?</h2>
        </div>
        <div className=" grid grid-cols-2">
            {allpost.map((post)=>{
                return <PromptCard post={post}/>
            })}
        </div>
        
    </div>
  )
}

export default otherProfile