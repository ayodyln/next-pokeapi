import { NextResponse } from "next/server"

let favorites: any = []

export const GET = async () => {
  return NextResponse.json({ favorites })
}

export async function POST(request: Request) {
  const body = await request.json()
  favorites = [...favorites, body]
  return NextResponse.json({ favorites })
}

export const DELETE = async (request: Request) => {
  const body = await request.json()
  return NextResponse.json({
    favorites: favorites.filter((fav: any) => body.name !== fav.name),
  })
}
