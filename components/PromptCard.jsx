
import React from 'react'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import {useState} from 'react'
import { usePathname,useRouter } from 'next/navigation'
const PromptCard = ({post,deletefunct,editfunct,tagClick}) => {
  const {data:session}=useSession()
  const [copied, setCopied] = useState("");
  const profilePush=(userId)=>{
      if(userId===session?.user.id){
        router.push('/profile')
        return
      }
      router.push(`/profile/${post.creator._id.toString()}?username=${post.creator.username}`)
  }
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  const router=useRouter()
  if(post.tag==="sadlklas"){console.log(post._id)}
  const pathName=usePathname()
  return (
    <div className="prompt_card">
      {/* <div className="flex justify-between items-start gap-5"> */}
      <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick={()=>{profilePush(post.creator._id)}}>
        <Image src={post.creator.image} className='rounded-full object-contain' width={40} height={40} alt=""/>
        <div className="flex flex-col">
          <h2 className='font-satoshi font-semibold text-gray-900'>{post.creator.username}</h2>
          <h2 className='font-inter text-sm text-gray-500'>{post.creator.email}</h2>
        </div>
        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={20}
            height={20}
          />
        </div>
      </div>
      <h2 className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</h2>
      <h2 className='font-inter text-sm blue_gradient cursor-pointer' onClick={()=>{pathName=='/'&&tagClick(post.tag)}}>{post.tag}</h2>
      {session?.user.id===post.creator._id && pathName=="/profile" &&
          <div className="flex justify-end gap-5 px-2">
            <button className="text-yellow-600"onClick={()=>{editfunct(post)}}>edit</button>
            <button className="text-red-600" onClick={()=>{deletefunct(post)}}>Delete</button>
          </div>
        }
    {/* </div> */}
    </div>
  )
}

export default PromptCard