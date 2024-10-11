import {connectToDB} from '@utils/database'
import Prompt from "@models/Prompt"
export const DELETE=async(request,{params})=>{
    try {
        await connectToDB();
        console.log(params.id)
        await Prompt.deleteOne({_id:params.id})
        return new Response("deleted succesfulyy",{status:200})
    } catch (error) {
        console.log(error)
        return new Response("faield deleting",{status:500})
    }
    
}

export const GET=async(request,{params})=>{
    try {
        await connectToDB()
        const prompt = await Prompt.find({_id:params.id})
        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        console.log(error)
    }
}

export const PATCH=async(request,{params})=>{
    const {userId,prompt,tag}=await request.json()
    try {
        await connectToDB()
        const thePrompt=await Prompt.findById(params.id)
        thePrompt.prompt=prompt
        thePrompt.tag=tag
        await thePrompt.save()
        return new Response("success eddited",{status:200})    
    } catch (error) {
        console.log(error)
        return new Response("failed eddited",{status:500})    

    }
}