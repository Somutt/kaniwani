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

interface Vocabulary {
    id: number;
    ideograms: string;
    meaning: string;
    secondary_meanings: string;
    readings: string;
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

export type KanjiPageProps = {
    kanji: Kanji;
    radicals: Radical[];
    kanjiRadicals: Radical[];
    vocabularies: Vocabulary[];
    kanjiVocabs: Vocabulary[];
}

export type AttachRadicalProps = {
    kanji: Kanji;
    radicals: Radical[];
    kanjiRadicals: Radical[];
}

export type AttachVocabularyProps = {
    kanji: Kanji;
    vocabularies: Vocabulary[];
    kanjiVocabs: Vocabulary[];
}

export type VocabularyProps = {
    stages: Stage[];
    vocabularies: Vocabulary[];
    levels_used: number[];
}

export type VocabularyListProps = {
    vocabularies: Vocabulary[];
    levels_used: number[];
}

export type VocabularyCardProps = {
    vocabulary: Vocabulary;
}

export type VocabularyPageProps = {
    vocabulary: Vocabulary;
    kanjis: Kanji[];
}