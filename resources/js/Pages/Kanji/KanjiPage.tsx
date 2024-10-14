import capitalize from "@/utils/capitalize";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import KanjiMeaningEdit from "./Partials/KanjiMeaningEdit";
import KanjiReadingEdit from "./Partials/KanjiReadingEdit";
import AttachRadical from "./Partials/AttachRadical"
import { KanjiPageProps, PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function KanjiPage({ auth, kanji, radicals }: PageProps<KanjiPageProps>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Kanji - {capitalize(kanji.meaning)}</h2>}
        >
            <Head title={`Kanji / ${capitalize(kanji.meaning)}`}/>

            <header className="max-w-5xl mx-auto p-3 flex items-center my-6">
                <div className="flex text-center text-2xl leading-[3rem] mr-4">
                    <Link href={route('kanji.index')} 
                        className="bg-slate-400 text-slate-100 shadow-md rounded w-12 h-12 mr-2">
                        {kanji.level}
                    </Link>
                    <span className="bg-fuchsia-400 text-white shadow-md rounded w-12 h-12 mr-2">{kanji.ideogram}</span>
                </div>
                <h1 className="text-4xl font-thin">{capitalize(kanji.meaning)}</h1>
            </header>

            <div className="max-w-5xl mx-auto p-3">
                <AttachRadical kanji={kanji} radicals={radicals} />
                <KanjiMeaningEdit kanji={kanji} />
                <KanjiReadingEdit kanji={kanji} />
                <h2 className="text-2xl border-b">Found in Vocabularies</h2>
            </div>
        </AuthenticatedLayout>
    );
}