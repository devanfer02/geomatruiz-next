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
    section_Id: number;
    right_option: number;
    title: string;
    description: string;
}

type Option = {
    id: number;
    question_id: number;
    value: string;
}