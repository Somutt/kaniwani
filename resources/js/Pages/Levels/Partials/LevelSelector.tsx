import { Link } from "@inertiajs/react";
import { LevelProps } from "@/types";

export default function LevelSelector({ levels }: LevelProps) {
    return (
        <section className="mt-6 mx-5 px-4 py-3 bg-slate-100 rounded-md">
            <ul>
                {levels.map( level => 
                    <li key={level.id} className="flex items-center">
                        <Link 
                            href={route('levels.show', level.level_number)}
                            className="flex-1 flex p-3 bg-slate-500 text-white border-b-2 rounded-md">
                            <span className="text-2xl">Level {level.level_number} </span>
                        </Link>
                        <Link 
                            as="button" href={route('levels.destroy', level.id)}
                            method="delete"
                            className="p-0.5 bg-red-400 border-2 border-l-0 border-transparent  hover:cursor-pointer hover:border-black">
                            x
                        </Link>
                    </li>
                )}
            </ul>
        </section>
    );
}
