type NavItem = {
    name: string;
    link: string;
    icon: string;
}

type Chapter = {
    id: string;
    title: string;
    description: string;
    imageLink: string;
}

type Section = {
    id: number;
    level: number;
    chapterId: string;
}

type Question = {
    id: number;
    sectionId: number;
    rightOptionId: number | null;
    title: string;
    imageLink: string;
    description: string;
    question: string;
}

type Option = {
    id: number;
    question_id: number;
    value: string;
}