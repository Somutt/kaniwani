import { KanjiListProps } from "@/types";
import KanjiCard from "./KanjiCard";

export default function KanjiList({ kanjis, levels_used }: KanjiListProps) {
    return (
        <section className="mt-6 mx-auto max-w-7xl px-4 py-3 bg-slate-200 rounded-md">
            <ol>
                {levels_used.map( level =>
                    <li key={level} className="flex-1 flex-col px-2 bg-slate-200 border-b-2 rounded-md md:px-3 md:py-1">
                        <span className="text-3xl text-gray-400">Level {level}</span>
                        <ol className="flex flex-col md:flex-row md:flex-wrap">
                            {kanjis.map( kanji => 
                                <li key={kanji.id}>
                                    {kanji.level == level ?
                                        <KanjiCard kanji={kanji} />
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