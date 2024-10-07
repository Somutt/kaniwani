import { RadicalListProps } from "@/types";
import RadicalCard from "./RadicalCard";

export default function RadicalList({ radicals, levels_used }: RadicalListProps) {
    return (
        <section className="mt-6 mx-auto max-w-7xl px-4 py-3 bg-slate-200 rounded-md">
            <ol>
                {levels_used.map( level => 
                    <li key={level} className="flex-1 flex-col p-3 mb-2 bg-slate-200 border-b-2 rounded-md">
                        <span className="text-3xl text-gray-400">Level {level}</span>
                            <div className="flex flex-col md:flex-row">
                                {radicals.map ( radical =>
                                    <>
                                        {radical.level == level ? 
                                            <RadicalCard radical={radical} />
                                            : 
                                            ''
                                        }
                                    </>
                                )}
                            </div>
                    </li>
                )}
            </ol>
        </section>
    );
}