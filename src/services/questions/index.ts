import { prisma } from "@/lib/prisma";

export const fetchAllQuestionsBySectionID = async (sectionId: number): Promise<[Question[] | null, unknown]> => {
    try {
        const questions = await prisma.question.findMany({
            where: {
                sectionId: sectionId
            }
        })

        return [ questions, null]
    } catch (err) {
        console.error(err)
        return [null, err]
    }
}

export const createQuestion = async (sectionId: number, question: QuestionRequest): Promise<[Question | null, unknown]> => {
    try {
        const newQuestion = await prisma.question.create({
            data: {
                title: question.title,
                sectionId: sectionId,
                imageLink: '',
                description: question.description,
                question: question.question
            }
        })

        return [newQuestion, null]
    } catch (err) {
        console.error(err)

        return [null, err]
    }
} 