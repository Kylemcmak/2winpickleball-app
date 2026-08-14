import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { markWatched } from "@/lib/progress";
import { getVideo } from "@/data/videos";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const videoId = body?.videoId;
  if (!videoId || !getVideo(videoId)) {
    return NextResponse.json({ error: "Unknown videoId" }, { status: 400 });
  }

  const watched = await markWatched(videoId);
  return NextResponse.json({ watched });
}
