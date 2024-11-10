import { deleteChapter, updateChapter } from "@/services/chapters";
import { NextRequest, NextResponse } from "next/server";

interface ChapterParam {
    params: {
        id: string;
    }
}

export async function PUT(request: NextRequest, { params}: ChapterParam) {
    const { title, description } = await request.json()
    const { id } = await params

    const [updatedChapter, error] = await updateChapter(id, {
        title,
        description
    })

    
    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to update chapter',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully update chapter',
        'data': updatedChapter
    }, {
        status: 200
    })
}

export async function DELETE(request: NextRequest, { params }: ChapterParam) {
    const { id } = await params

    const [deletedChapter, error] = await deleteChapter(id)

    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to delete chapter',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully delete chapter',
        'data': deletedChapter
    }, {
        status: 200
    })
}