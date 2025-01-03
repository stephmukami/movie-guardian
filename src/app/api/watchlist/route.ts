import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';



export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, userEmail } = body;

    if (!name || !userEmail) {
      return NextResponse.json({ error: "Name and user email are required" }, { status: 400 });
    }

    const watchlist = await prisma.watchList.create({
      data: {
        name,
        movieTitles: [],
        userEmail,
      },
    });

    return NextResponse.json({ watchlist }, { status: 200 });
  } catch (error) {
    console.error("Error creating watchlist:", error);
    return NextResponse.json({ error: "Error creating watchlist" }, { status: 500 });
  }
}