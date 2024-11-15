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
    title: string;
    imageLink: string;
    description: string;
    question: string;
    [key: string]: string;
}
