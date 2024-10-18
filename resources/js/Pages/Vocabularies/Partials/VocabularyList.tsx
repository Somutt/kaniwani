import VocabularyCard from "./VocabularyCard";
import { VocabularyListProps } from "@/types";

export default function VocabularyList({ vocabularies, levels_used }: VocabularyListProps) {
    return (
        <section className="mt-6 mx-auto max-w-7xl px-4 py-3 bg-slate-200 rounded-md">
            <ol>
                {levels_used.map( level =>
                    <li key={level} className="flex-1 flex-col px-2 bg-slate-200 border-b-2 rounded-md md:px-3 md:py-1">
                        <span className="text-3xl text-gray-400">Level {level}</span>
                        <ol className="flex flex-col">
                            {vocabularies.map( vocab => 
                                <li key={vocab.id}>
                                    {vocab.level == level ?
                                        <VocabularyCard vocabulary={vocab} />
                                    :
                                        ''
                                    }
                                </li>
                            )}
                        </ol>
                    </li>
                )}
            </ol>
        </section>
    );
}