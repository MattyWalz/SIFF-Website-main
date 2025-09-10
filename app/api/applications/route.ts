import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"

export async function GET() {
  try {
    const applicationIds = (await kv.lrange("applications", 0, -1)) as string[]
    const applications = []

    for (const id of applicationIds) {
      const app = await kv.get(id)
      if (app) applications.push(app)
    }

    return NextResponse.json({ applications })
  } catch (error) {
    console.error("[v0] Error fetching applications:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}
