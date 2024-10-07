import { RadicalListProps } from "@/types";

export default function RadicalList({ radicals, levels_used }: RadicalListProps) {
    return (
        <section className="mt-6 mx-auto max-w-7xl px-4 py-3 bg-slate-200 rounded-md">
            <ol>
                {levels_used.map( level => 
                    <li key={level} className="flex-1 flex-col p-3 mb-2 bg-slate-200 border-b-2 rounded-md">
                        <span className="text-2xl">Level {level}</span>
                        {radicals.map ( radical =>
                            <div>
                                {radical.level == level ? radical.ideogram : ''}
                            </div>
                        )}
                    </li>
                )}
            </ol>
        </section>
    );
}