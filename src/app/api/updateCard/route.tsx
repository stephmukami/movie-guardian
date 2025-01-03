import {prisma} from '@/app/lib/prisma'
import { NextResponse } from 'next/server';

export  async function PUT(request: Request){

    
    try{
        const body = await request.json();
        const{id,movies} = body;

        if(!id||!movies){
            console.error("Enter valid info");
            return NextResponse.json({error:"No details passed"},{status:500}); 
      
        }

        const updatedCard = await prisma.savedMovie.update({
            where:{id},
            data: {
                movies: {
                    push: movies, // Append new text to existing array
                },
            }
        });

      

        console.log("Card Updated Successfully",updatedCard);
        return NextResponse.json({updatedCard},{status:200});

    }catch(error){
        console.error("Errror updating card",error);
    }
}