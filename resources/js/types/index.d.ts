import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

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