import bcrypt from 'bcrypt'
import {prisma} from '@/app/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request: { json: any }){
    const body = await request.json();
    const { firstName, email, password } = body;

    if(!firstName || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            firstName,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}