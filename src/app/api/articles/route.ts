import { getArticlesBySource } from "@/services/articelServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams }  = new URL(req.url);
    const keyword = searchParams.get("keyword") || "";
    const date = searchParams.get("date") || "";
    const category = searchParams.get("category") || "";
    const source = searchParams.get("source") || "";

    try {
        if(!source) {
            return NextResponse.json({ error: "Source is required." }, { status: 400 });
        }

        const articles = await getArticlesBySource({ source, keyword, date, category });
        return NextResponse.json({ articles }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
};