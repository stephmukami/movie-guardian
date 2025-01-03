// import { prisma } from '@/app/lib/prisma';
// import { NextResponse } from 'next/server';

// export async function PUT(request: Request) {
//   try {
//     const body = await request.json();
//     const { id, movie } = body;

//     if (!id || !movie) {
//       return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
//     }

//     const updatedCard = await prisma.savedMovie.update({
//       where: { id },
//       data: { movie }, // Update the single movie string
//     });

//     return NextResponse.json({ updatedCard }, { status: 200 });
//   } catch (error) {
//     console.error('Error updating card:', error);
//     return NextResponse.json({ error: 'Failed to update card' }, { status: 500 });
//   }
// }
