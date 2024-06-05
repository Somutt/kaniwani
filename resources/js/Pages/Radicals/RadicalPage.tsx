import { Head } from "@inertiajs/react";

export type RadicalPageProps = {
    radical: {
        id: number;
        ideogram?: string;
        meaning:string;
        level?: number;
        level_id: number;
    }
};

export default function RadicalPage({ radical }: RadicalPageProps) {
    return (
        <>
            <Head title={`Radical / ${radical.meaning}`}/>
            <header className="flex items-center my-6 ml-5">
                <div className="flex text-center text-2xl leading-[3rem] mr-4">
                    <a href="" className="bg-slate-400 text-slate-100 shadow-md rounded w-12 h-12 mr-2">{radical.level}</a>
                    <span className="bg-blue-400 text-white shadow-md rounded w-12 h-12 mr-2">{radical.ideogram}</span>
                </div>
                <h1 className="text-4xl font-thin">{radical.meaning}</h1>
            </header>
            <div className="mx-5">
                <h2 className="text-2xl border-b mb-2">Name</h2>
                <span className="text-slate-400 font-thin">Primary </span>
                <span className="font-medium ml-1">{radical.meaning}</span>
            </div>
            <div className="mx-5 mt-6">
                <h2 className="text-2xl border-b">Found in Kanji</h2>
            </div>
        </>
    )
}
