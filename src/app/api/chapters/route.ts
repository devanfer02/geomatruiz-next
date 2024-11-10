import { createChapter, fetchAllChapters } from "@/services/chapters";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
    const [chapters, error] = await fetchAllChapters()

    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to fetch all chapters',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully fetch all chapters',
        'data': chapters
    })
}

export async function POST(request: NextRequest) {
    const { title, description } = await request.json()

    try {
        const chapter: ChapterRequest = {
            title, 
            description
        }
    
        const chapterSchema = z.object({
            title: z.string().min(1, 'Title is required'),
            description: z.string().min(1, 'Description is required')
        })
    
        chapterSchema.parse(chapter)

        const [newChapter, error] = await createChapter(chapter)

        if (error != null) {
            return NextResponse.json({
                'success': false,
                'message': 'failed to create new chapter',
                'error': error 
            }, {
                status: 500
            })
        }

        return NextResponse.json({
            'success': true,
            'message': 'successfully create new chapter',
            'data': newChapter
        })

    } catch (err) {

        if (err instanceof z.ZodError) {
            return NextResponse.json({
                'success': false,
                'message': 'failed to create chapter',
                'error': err.issues
            }, {
                status: 400
            })
        }
    }

}

