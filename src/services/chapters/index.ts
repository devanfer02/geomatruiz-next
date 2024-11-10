import { prisma } from "@/lib/prisma"

export const fetchAllChapters = async () => {
    try {
        const chapters = await prisma.chapter.findMany()
        
        return [chapters, null]
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
                imageLink: ''
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
                imageLink: ''
            }
        })

        return [updatedChapter, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const deleteChapter = async (chapterId: string, chapter: ChapterRequest) => {
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