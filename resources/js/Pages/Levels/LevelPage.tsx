import { Head, Link } from "@inertiajs/react";


export type LevelPageProps = {
    lesson_level: number;
    /* radicals: {
        id: number;
        ideogram: string;
        level: number;
        meaning: string;
    }[]; */
};

export default function LevelPage({ lesson_level}: LevelPageProps) { // , radicals 
    // console.log(radicals);
    return (
        <main>
            <Head title={`Level ${lesson_level}`}/>
            <h2 className="mt-6 mb-3 mx-5 text-4xl font-thin">Level {lesson_level}</h2>
            <h2 className="mx-5 text-slate-400 text-2xl font-thin">Radicals, Kanji and Vocabularies</h2>
            <div className="items-center mx-5 mt-3 flex text-slate-500">
                <span className="mr-1 text-base">Type</span>
                <span className="mr-1">{'>'}</span>
                <ul className="flex items-center">
                    <li>
                        <a href="" className="text-sm px-2 py-1 mr-1 bg-slate-200 hover:bg-slate-600 hover:text-white">
                            Radicals
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-sm px-2 py-1 mr-1 bg-slate-200 hover:bg-slate-600 hover:text-white">
                            Kanji
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-sm px-2 py-1 mr-1 bg-slate-200 hover:bg-slate-600 hover:text-white">
                            Vocabularies
                        </a>
                    </li>
                </ul>
            </div>
{/* 
            <ul>
                <li>
                    <section className="mt-3 mx-5 px-4 py-3 bg-slate-100 rounded-md">
                        <h3 className="text-2xl text-slate-500 font-thin">Radicals</h3>
                        <ul className="my-1">
                            {radicals.map(r =>
                                <li key={r.id} className="flex justify-between items-center text-white hover:cursor-pointer">
                                    <Link as="button" href={route('radicals.show', r.meaning.toLowerCase())}
                                        method="get"
                                        className="flex-1 flex justify-between items-center p-3 bg-blue-500 border-b-2">
                                        <span className="text-xl">{r.ideogram}</span>
                                        <span>{r.meaning}</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </section>
                </li>
                <li>
                    <section className="mt-3 mx-5 px-4 py-3 bg-slate-100 rounded-md">
                        <h3 className="text-2xl text-slate-500 font-thin">Kanji</h3>
                    </section>
                </li>
                <li>
                    <section className="mt-3 mx-5 px-4 py-3 bg-slate-100 rounded-md">
                        <h3 className="text-2xl text-slate-500 font-thin">Vocabularies</h3>
                    </section>
                </li>
            </ul>
*/}
        </main>
    );
}
