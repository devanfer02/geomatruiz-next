import { prisma } from "@/lib/prisma"

export const fetchAllChapters = async (): Promise<[Chapter[] | null, unknown]> => {
    try {
        const chapters = await prisma.chapter.findMany()
        
        return [chapters, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const fetchChapterByID = async (id: string): Promise<[Chapter| null, unknown]> => {
    try {
        const chapter = await prisma.chapter.findFirst({
            where:{
                id: id 
            }
        })

        return [chapter, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const createChapter = async (chapter: ChapterRequest) => {
    try {
        const newChapter = await prisma.chapter.create({
            data: {
                title: chapter.title,
                description: chapter.description,
                imageLink: '',
                order: chapter.order,
            }
        })

        return [newChapter, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const updateChapter = async (chapterId: string, chapter: ChapterRequest) => {
    try {
        const updatedChapter = await prisma.chapter.update({
            where: {
                id: chapterId
            },
            data: {
                title: chapter.title,
                description: chapter.description,
                imageLink: '',
                order: chapter.order,
            }
        })

        return [updatedChapter, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const deleteChapter = async (chapterId: string) => {
    try {
        const deletedChapter = await prisma.chapter.delete({
            where: {
                id: chapterId
            }
        })

        return [deletedChapter, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}