import { fetchAllChapters } from "@/services/chapters";
import { NextRequest, NextResponse } from "next/server";

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

}