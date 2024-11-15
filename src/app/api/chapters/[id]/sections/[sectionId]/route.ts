import { deleteSection, updateSection } from "@/services/sections";
import { NextRequest, NextResponse } from "next/server";

interface SectionParam {
    params: {
        id: string;
        sectionId: number;
    }
}

export async function PUT(req: NextRequest, { params}: SectionParam) {
    const { level } = await req.json()
    const { id, sectionId } = await params 

    const [updatedSection, error] = await updateSection(Number(sectionId), {
        chapterId: id,
        level: Number(level)
    })

    
    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to update section',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully update section',
        'data': updatedSection
    }, {
        status: 200
    })

}

export async function DELETE(req: NextRequest, { params } : SectionParam) {
    const { sectionId } = await params 

    const [ deletedSection, error ] = await deleteSection(Number(sectionId)) 

    if (error != null) {
        return NextResponse.json({
            'success': false,
            'message': 'failed to delete section',
            'error': error 
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        'success': true,
        'message': 'successfully delete section',
        'data': deletedSection
    }, {
        status: 200
    })
}

