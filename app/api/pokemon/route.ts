import { NextResponse } from "next/server"

let favorites: any = []

export const GET = async () => NextResponse.json({ favorites })

export async function POST(request: Request) {
  const body = await request.json()
  favorites = [...favorites, body]
  return NextResponse.json({ favorites })
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
