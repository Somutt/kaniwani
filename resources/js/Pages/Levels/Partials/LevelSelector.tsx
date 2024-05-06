import { Link } from "@inertiajs/react";
import { LevelsProps } from "../Levels";
import AddLevelForm from "./AddLevelForm";

export default function LevelSelector({ levels }: LevelsProps) {
    return (
        <section className="mt-6 mx-5 px-4 py-3 bg-slate-100 rounded-md">
            <div className="mt-6 mb-4">
                <h2 className="text-2xl font-light text-slate-500">Levels</h2>
                    <ul>
                        {
                            levels?.map( level => <li key={level.id}>
                                    <div className="flex justify-between items-center p-3 bg-slate-500 text-white border-b-2 hover:cursor-default">
                                        <span className="text-2xl">Level {level.lesson_level}</span>
                                        <Link as="button" href={route('levels.destroy', level.id)}
                                            method="delete"
                                            className="hover:text-red-300 hover:cursor-pointer">
                                            delete
                                        </Link>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
            </div>
            <AddLevelForm />
        </section>
    );
}
