import { createSection } from "@/services/sections";
import { NextRequest, NextResponse } from "next/server";

interface ChapterParam {
    params: {
        id: string;
    }
}

export async function POST(req: NextRequest, { params}: ChapterParam) {
    const { level } = await req.json()
    const { id } = await params 

    const [ newSection, error ] = await createSection({
        level: Number(level),
        chapterId: id 
    })   

    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to create new section',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully create new section',
        'data': newSection
    })
}