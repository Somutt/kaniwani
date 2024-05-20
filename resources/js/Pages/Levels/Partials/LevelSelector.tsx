import { Link } from "@inertiajs/react";
import { LevelsProps } from "../Levels";
import AddLevelForm from "./AddLevelForm";

export default function LevelSelector({ levels }: LevelsProps) {
    return (
        <section className="mt-6 mx-5 px-4 py-3 bg-slate-100 rounded-md">
            <div className="mt-3 mb-4">
                <h2 className="text-2xl font-light text-slate-500">Levels</h2>
                    <ul>
                        {
                            levels?.map( level => <li key={level.id} className="flex items-center">
                                    <Link as="button" href={route('levels.show', level.lesson_level)}
                                        method="get"
                                        className="flex-1 flex p-3 bg-slate-500 text-white border-b-2">
                                        <span className="text-2xl">Level {level.lesson_level}</span>
                                    </Link>
                                    <Link as="button" href={route('levels.destroy', level.id)}
                                        method="delete"
                                        className="p-0.5 bg-red-400 border-2 border-l-0 border-transparent hover:cursor-pointer hover:border-black">
                                        x
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
            </div>
            <AddLevelForm />
        </section>
    );
}
