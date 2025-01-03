import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.watchList.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Watchlist deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting watchlist:", error);
    return NextResponse.json({ error: "Error deleting watchlist" }, { status: 500 });
  }
}