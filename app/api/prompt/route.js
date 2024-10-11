import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate("creator");
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Error fetching prompts:", error); // Log the actual error
        return new Response("Failed in fetching", { status: 500 });
    }
};
