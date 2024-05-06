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
    console.log(levels);
    return (
        <main>
            <Head title="Levels"/>
            {/* {levels.length > 0
                ?
                <ul>
                    {levels.map( (l) => <li key={l.id}> {l.lesson_levels} </li>)}
                </ul>
                :
                <div>
                    <h2>Hello World! (Levels)</h2>
                </div>
            } */}
            <LevelSelector levels={levels} />
        </main>
    );
}
