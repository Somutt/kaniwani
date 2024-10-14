import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface Stage {
    id: number;
    stage_number: number;
}

interface Level {
    id: number;
    level_number: number;
    stages: Stage[];
}

interface Radical {
    id: number;
    level: number;
    ideogram: string;
    meaning: string;
}

interface Kanji {
    id: number;
    ideogram: string;
    onyomi?: string;
    kunyomi?: string;
    meaning: string;
    secondary_meanings?: string;
    level: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type LevelProps = {
    levels: Level[]
};

export type StageProps = {
    stages: Stage[];
}

export type RadicalProps = {
    stages: Stage[];
    radicals: Radical[];
    levels_used: number[];
}

export type RadicalListProps = {
    radicals: Radical[];
    levels_used: number[];
}

export type RadicalPageProps = {
    radical: Radical;
    kanjis: Kanji[];
}

export type RadicalCardProps = {
    radical: Radical;
}

export type KanjiProps = {
    stages: Stage[];
    kanjis: Kanji[];
    levels_used: number[];
}

export type KanjiListProps = {
    kanjis: Kanji[];
    levels_used: number[];
}

export type KanjiCardProps = {
    kanji: Kanji;
}