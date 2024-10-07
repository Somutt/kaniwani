import { Link } from "@inertiajs/react";
import { LevelProps } from "@/types";
import LevelStage from "./LevelStage";

export default function LevelSelector({ levels }: LevelProps) {
    return (
        <section className="mt-6 mx-auto max-w-7xl px-4 py-3 bg-slate-200 rounded-md">
            <ol>
                {levels.map( level => 
                    <li key={level.id} className="mb-2" >
                        <div className="relative flex items-center z-10">
                            <Link 
                                href={route('levels.show', level.level_number)}
                                className="flex-1 flex p-3 bg-indigo-300 text-neutral-700 rounded-md">
                                <span className="text-2xl">Level {level.level_number} </span>
                            </Link>
                            <Link 
                                href={route('levels.destroy', level.id)}
                                as="button" 
                                method="delete"
                                className="p-0.5 bg-red-300 border-2 border-l-0 border-transparent hover:cursor-pointer hover:border-black">
                                x
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <Link
                                href={route('stage.store', level.id)}
                                as="button"
                                method="post"
                                className="relative -top-0.5 p-1 bg-red-200 border-2 border-t-0 border-transparent rounded ml-2 hover:cursor-pointer hover:border-black">
                                Add Stage
                            </Link>
                            <LevelStage stages={level.stages} />
                        </div>
                    </li>
                )}
            </ol>
        </section>
    );
}
