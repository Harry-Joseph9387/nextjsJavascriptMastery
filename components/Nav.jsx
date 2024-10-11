import React from 'react'
import Image from 'next/image'
import {useState,useEffect} from "react"
import {useSession,getProviders,signIn,signOut} from "next-auth/react"
import {useRouter} from "next/navigation"
const Nav = () => {
    const loggedIn=false
    const [dropdown,setDropdown]=useState(false)
    const [providers,setProviders]=useState(null)
    const {data:session}=useSession()
    const router=useRouter()
    useEffect(()=>{
        (async()=>{
            const response=await getProviders()
            setProviders(response)
        })()
    },[])
  return (
    <div>
        <div className="flex justify-between px-4 py-2 w-full">
            <div className="flex items-center gap-2">
                <Image src='/assets/images/logo.svg' onClick={()=>{router.push("/")}} height={40} width={40} className='rounded-full' alt=""/>
                <h2>PROMTOPIA</h2>
            </div>
            {/* destop */}
            <div className="items-center gap-4 sm:flex hidden">
                {session?.user?(
                    <div className=" flex gap-5">
                        <Image src={session?.user.image} onClick={()=>{router.push('/profile')}} width={40} height={40} alt="x"/>
                        <button onClick={()=>{signOut()}} className="bg-gray-500 text-white p-2 rounded-lg">SignOUt</button>
                        <button onClick={()=>router.push("/create-post")} className="bg-gray-500 text-white p-2 rounded-lg">Create Pst</button>
                    </div>
                ):(
                    <div className="">
                        {providers &&
                        Object.values(providers).map((provider)=>(
                            <div className="">
                                <button key={provider.name} onClick={()=>{signIn(provider.id)}} className="bg-gray-500 text-white p-2 rounded-lg">SignIn</button>
                            </div>
                        ))
                        }
                    </div>
                )}
            </div>
            {/* mobile */}
            <div className="block relative sm:hidden">
                <Image src={session?.user ? session?.user.image:'/assets/images/logo.svg'} onClick={()=>{setDropdown(!dropdown)}} width={40} height={40} alt=""/>
                {dropdown&&

                    <div className="bg-gray-200 w-32  absolute z-10 right-0 rounded-md">
                        {session?.user ? (
                            <div className="flex flex-col gap-3  items-center px-4 justify-center h-full">
                                <button onClick={()=>{router.push("/create-post");setDropdown(false)}}>Create POst</button>
                                <button onClick={()=>{router.push("/profile")}} >profile</button>
                                <button onClick={()=>{signOut()}}>signOut</button>
                            </div>
                        ):(
                            <div className="">
                                {providers && Object.values(providers).map((provider)=>(
                                    <button key={provider.name} onClick={()=>{signIn(provider.id)}}>SignIN</button>
                                ))}
                            </div>
                        )
                        }
                    </div>
                }   
            </div>
        </div>
    </div>
  )
}

export default Nav