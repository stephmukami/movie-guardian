import {prisma} from '@/app/lib/prisma'

import { NextResponse,NextRequest } from 'next/server'

export async function POST(request:{json:any}){
    try{
    const body = await request.json();
    const {text,userEmail} = body;

    if(!text||!userEmail){
        console.error("Enter valid info");
        return NextResponse.json({error:"No details passed"},{status:500}); 
  
    }

    const savedCard = await prisma.savedMovie.create({
        data:{
            movies:[text],
            userEmail,
        },
    });
    console.log("Successfully saved card",savedCard);
    return NextResponse.json({savedCard},{status:200});

    }catch(error){
       console.error("Error adding card",error);
       return NextResponse.json({error:"Error adding card"},{status:500}); 
    }
    

}