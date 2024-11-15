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

export const fetchSectionByID = async (id: number, chapterId: string): Promise<[Section | null, unknown]> => {
    try {
        const section = await prisma.section.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                questions: true 
            }
        })

        return [ section, null ]
    } catch(err) {
        console.error(err)
        return [ null, err ]
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

export const updateSection = async (id: number, section: SectionRequest): Promise<[Section | null, unknown]> => {
    try {
        const updatedSection = await prisma.section.update({
            where: {
                id
            },
            data: {
                level: section.level
            }
        })

        return [updatedSection, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const deleteSection = async (id: number): Promise<[Section | null, unknown]> => {
    try {
        const deletedSection = await prisma.section.delete({
            where: {
                id
            }
        })

        return [deletedSection, null]
    } catch (err) {
        console.error(err)
        return [ null, err ]
    }
}