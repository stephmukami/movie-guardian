import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { NextRequest,NextResponse } from "next/server";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

const generationConfig = {
  stopSequences:["red"],
  temperature:0.9,
  topP:0.1,
  topK:16,
};

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request:NextRequest){
    const {chatQuestion} = await request.json();

    if(!chatQuestion){
      return NextResponse.json({error:"Must have a valid chat question"},{status:500})  
    }
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",generationConfig });
        const finalPrompt = `Summarize the following in under 300 tokens in text:${chatQuestion}`;
        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const text = response.text();
        return NextResponse.json({chatResponse:text},{status:200});

    }catch(error){
    console.log(error);
    return NextResponse.json({error:"Error in processing question"},{status:500})  
 
    }
}