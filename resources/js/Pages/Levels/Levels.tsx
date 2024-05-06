import { Head } from "@inertiajs/react";
import LevelSelector from "./Partials/LevelSelector";

export type LevelsProps = {
    levels?: {
        id?: number,
        lesson_level?: number,
        created_at?: Date,
        updated_at?: Date
    }[]
}

export default function Levels({ levels }: LevelsProps) {
    return (
        <main>
            <Head title="Levels"/>
            <LevelSelector levels={levels} />
        </main>
    );
}
