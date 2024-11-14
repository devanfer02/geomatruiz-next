type ChapterRequest =  {
    title: string;
    description: string;
    order: number;
    imageLink?: string;
}

type SectionRequest = {
    level: number
    chapterId: string
}

type QuestionRequest = {

}