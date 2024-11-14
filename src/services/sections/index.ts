import { prisma } from "@/lib/prisma";

interface SectionParam {
    chapterId: string
}

export const fetchSectionsByChapterID = async (chapterId: string): Promise<[Section[] | null, unknown]> => {
    try {
        const sections = await prisma.section.findMany({
            where: {
                chapterId: chapterId
            },
            orderBy: {
                level: 'asc'
            }
        })

        return [sections, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const createSection = async (section: SectionRequest): Promise<[Section | null, unknown]> => {
    try {
        const newSection = await prisma.section.create({
            data: {
                level: section.level,
                chapterId: section.chapterId
            }
        })

        return [newSection, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}