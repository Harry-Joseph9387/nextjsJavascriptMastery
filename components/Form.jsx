import React from 'react'


import Link from "next/link";

const Form = ({post,uploadPrompt,setPost}) => {
    
  return (
    <div className='flex flex-col items-center'>
        <div className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism ">
            <div className="flex items-start flex-col gap-10 w-full">
                <label htmlFor="" className='w-full'>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>
                    <input type="text" value={post&&post.prompt} onChange={(e) =>setPost((prev) => ({ ...prev, prompt: e.target.value }))}className='form_textarea bg-gray-200 w-full'/>
                </label>
                <label htmlFor="" className='w-full'>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
                    <input type="text" value={post&&post.tag}  onChange={(e) => setPost((prev)=>({ ...prev, tag: e.target.value }))}  className='form_input bg-gray-200'/>
                </label>
            <div className=" flex justify-end gap-5 w-full items-center">
                <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
                <button onClick={()=>uploadPrompt()} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>Submit</button>
            </div>
            </div>

        </div>
    </div>
)
}

export default Form