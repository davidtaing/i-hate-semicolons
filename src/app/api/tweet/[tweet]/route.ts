import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getTweet } from "react-tweet/api";

export async function GET(
  request: NextRequest,
  { params }: { params: { tweet: string } }
) {
  const tweetId = params.tweet;

  if (typeof tweetId !== "string") {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  const path = request.nextUrl.searchParams.get("path");
  path && revalidatePath(path);

  try {
    const tweet = await getTweet(tweetId);
    return NextResponse.json({ data: tweet ?? null });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
