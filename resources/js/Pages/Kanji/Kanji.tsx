import { Head, Link } from "@inertiajs/react";
import AddKanjiForm from "./Partials/AddKanjiForm";

export type KanjiTypeProps = {
    kanji?: {
        id: number;
        ideogram: string;
        meaning: string;
        secondary_meaning?: string;
        onyomi?: string;
        kunyomi?: string;
        level?: number;
        level_id: number;
    }[]
    keys?: number[];
}

export default function Kanji({ kanji = [], keys = [] }: KanjiTypeProps) {
    return (
        <main>
            <Head title="Kanji"/>
            <h2 className="mt-6 mx-5 text-4xl font-thin">Radicals</h2>
            <div className="items-center mx-5 mt-3 flex text-slate-500">
                <span className="mr-1 text-base">Kanji</span>
                <span className="mr-1">{'>'}</span>
                <ul className="flex items-center">
                    {keys.map(k =>
                                <li key={k}>
                                    <a href="" className="text-sm px-2 py-1 mr-1 bg-slate-200 hover:bg-slate-600 hover:text-white">
                                        {k}
                                    </a>
                                </li>
                            )}
                </ul>
            </div>
            <ol>
                {keys.map(k =>
                        <li key={k}>
                            <section className="mt-3 mx-5 px-4 py-3 bg-slate-100 rounded-md">
                                <h3 className="text-2xl text-slate-500 font-thin">Level {k}</h3>
                                <ul className="my-1">
                                    {kanji.map( kanji => kanji.level === k ?
                                        <li key={kanji.id} className="flex justify-between items-center text-white hover:cursor-pointer">
                                            <Link as="button" href={route('kanji.show', kanji.meaning.toLowerCase())}
                                                    method="get"
                                                    className="flex-1 flex justify-between items-center p-3 bg-pink-400 border-b-2">
                                                    <span className="text-2xl">{kanji.ideogram}</span>
                                                    <div className="flex flex-col text-sm">
                                                        <span className="">{kanji.onyomi}</span>
                                                        <span>{kanji.meaning}</span>
                                                    </div>
                                            </Link>
                                            <Link as="button" href={route('kanji.destroy', kanji.id)}
                                                method="delete"
                                                className="p-0.5 bg-red-400 border-2 border-l-0 border-transparent hover:cursor-pointer hover:border-black">
                                                x
                                            </Link>
                                        </li>
                                        : '' )
                                    }
                                </ul>
                            </section>
                        </li>
                )}
            </ol>
            <AddKanjiForm />
        </main>
    );
}
