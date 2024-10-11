"use client"
import React from 'react'
import {useState,useEffect} from 'react'
import PromptCard from "@components/PromptCard"
const PromptCardList=({data,tagClick})=>{
    return(
        <div className="mt-16 prompt_layout">
            {data.map((post)=>
                <PromptCard post={post} tagClick={tagClick}/>
            )}
        </div>
        )
}
const Feed = () => {
    const [allPosts,setAllPosts]=useState([])
    const [variablePosts,setVariablePosts]=useState([])
    const [searchInput,setSearchInput]=useState('')
    const filterPrompts=(searchinput)=>{
        setSearchInput(searchinput)
        const regex=new RegExp(searchinput,"i")
        const variablePosts=allPosts.filter((post)=>regex.test(post.creator.username)||regex.test(post.prompt)||regex.test(post.tag))
        setVariablePosts(variablePosts)
    }
    
    const fetching=async()=>{
        const response=await fetch("/api/prompt")
        const data=await response.json()
        setAllPosts(data)
        setVariablePosts(data)
    }
    useEffect(()=>{
        fetching()
    },[])
    const tagClickfunct=(tag)=>{
        setSearchInput(tag)
        filterPrompts(tag)
    }
  return (
    <div className="feed ">
        <input type="text" className='search_input peer' value={searchInput} onChange={(e)=>{filterPrompts(e.target.value)}}  placeholder='type here' />
        <div className="w-full">
        {searchInput?(
            <PromptCardList data={variablePosts} tagClick={tagClickfunct}/>
        ):(
            <PromptCardList data={allPosts} tagClick={tagClickfunct}/>
            )
                }
        </div>
    </div>
  )
}

export default Feed