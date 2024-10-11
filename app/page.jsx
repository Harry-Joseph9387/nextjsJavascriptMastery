import React from 'react'
import Feed from "@components/Feed"
const mainPage = () => {
  return (
    <div>
        <div className="flex flex-col items-center   py-5 w-full">
          <h1 className='head_text text-center'>
              Discover & Share
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'> AI-Powered Prompts</span>
          </h1>
        <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        </div>
        <Feed/>
    </div>
  )
}

export default mainPage