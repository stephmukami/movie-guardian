import {prisma} from '@/app/lib/prisma'
import { NextResponse } from 'next/server';

export default async function DELETE(request:{json:any}){
    try{
       const {id} = request.json;

       if(!id){
        return NextResponse.json({message:"Card not found"},{status:404});
       }

       const deletedCard = await prisma.savedMovie.delete({
        where:{id},
       });

       return NextResponse.json({message:"Successful deletion"},{status:200});


    }catch(error){
        console.error("Error deleting card",error);
        return NextResponse.json({message:"Error deleting"},{status:500});

    }
}