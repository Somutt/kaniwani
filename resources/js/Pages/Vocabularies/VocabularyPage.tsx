import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import VocabularyMeaningEdit from "./Partials/VocabularyMeaningEdit";
import capitalize from "@/utils/capitalize";
import { PageProps, VocabularyPageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import VocabularyReadingsEdit from "./Partials/VocabularyReadingsEdit";

export default function VocabularyPage({ auth, vocabulary, kanjis }: PageProps<VocabularyPageProps>) {
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Vocabulary- {capitalize(vocabulary.meaning)}</h2>}
        >
            <Head title={`Vocabulary / ${capitalize(vocabulary.meaning)}`}/>

            <header className="max-w-5xl mx-auto p-3 flex items-center my-6">
                <div className="flex text-center text-2xl leading-[3rem] mr-4">
                    <Link href={route('vocabularies.index')} 
                        className="bg-slate-400 text-slate-100 shadow-md rounded w-12 h-12 mr-2">
                        {vocabulary.level}
                    </Link>
                    <span className="bg-purple-400 text-white shadow-md rounded h-12 mr-2 px-2">{vocabulary.ideograms}</span>
                </div>
                <h1 className="text-4xl font-thin">{capitalize(vocabulary.meaning)}</h1>
            </header>

            <div className="max-w-5xl mx-auto p-3">
                <VocabularyMeaningEdit vocabulary={vocabulary} />
                <VocabularyReadingsEdit vocabulary={vocabulary} />
            </div>
            <div className="max-w-5xl mx-auto p-3">
                <h2 className="text-2xl border-b">Found in Kanji</h2>
            </div>
            <ul className="max-w-5xl mx-auto p-3 flex flex-wrap items-center">
                {kanjis.map( k => 
                    <li key={k.id} className="flex flex-col items-center justify-between flex-1 text-white bg-fuchsia-400 p-3 border border-white 
                        min-w-28 max-w-28 min-h-28 max-h-28">
                        <span className="text-4xl">{k.ideogram}</span>
                        <div className="flex flex-col items-center text-sm">
                            <span>{k.onyomi ? k.onyomi.slice(0,3) : k.kunyomi?.slice(0,3)}</span>
                            <span>{k.meaning.length <= 10 ? capitalize(k.meaning) : capitalize(k.meaning.slice(0, 7)) + " ..."}</span>
                        </div>
                    </li>
                )}
            </ul>
        </AuthenticatedLayout>
    );
}