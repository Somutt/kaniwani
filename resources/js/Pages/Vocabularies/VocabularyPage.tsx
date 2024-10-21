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
        </AuthenticatedLayout>
    );
}