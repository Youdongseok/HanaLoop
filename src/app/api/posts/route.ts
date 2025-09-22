// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { fetchPosts, createOrUpdatePost } from "@/lib/api"; // 경로는 실제 위치에 맞춰 수정

export async function GET() {
  try {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: "게시물 불러오기 실패" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const savedPost = await createOrUpdatePost(body);
    return NextResponse.json(savedPost);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message || "저장 실패" }, { status: 500 });
  }
}
