import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { movieTitle } = body;

    if (!movieTitle) {
      return NextResponse.json({ error: "Movie title is required" }, { status: 400 });
    }

    const watchlist = await prisma.watchList.update({
      where: { id: params.id },
      data: {
        movieTitles: {
          push: movieTitle,
        },
      },
    });

    return NextResponse.json({ watchlist }, { status: 200 });
  } catch (error) {
    console.error("Error adding movie:", error);
    return NextResponse.json({ error: "Error adding movie" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { movieTitle } = body;

    if (!movieTitle) {
      return NextResponse.json({ error: "Movie title is required" }, { status: 400 });
    }

    const watchlist = await prisma.watchList.findUnique({
      where: { id: params.id },
    });

    if (!watchlist) {
      return NextResponse.json({ error: "Watchlist not found" }, { status: 404 });
    }

    const updatedMovies = watchlist.movieTitles.filter(title => title !== movieTitle);

    const updatedWatchlist = await prisma.watchList.update({
      where: { id: params.id },
      data: {
        movieTitles: updatedMovies,
      },
    });

    return NextResponse.json({ watchlist: updatedWatchlist }, { status: 200 });
  } catch (error) {
    console.error("Error removing movie:", error);
    return NextResponse.json({ error: "Error removing movie" }, { status: 500 });
  }
}