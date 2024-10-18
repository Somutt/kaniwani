import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AddVocabularyForm from "./Partials/AddVocabularyForm";
import VocabularyList from "./Partials/VocabularyList";
import { PageProps, VocabularyProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Vocabularies({ auth, stages, vocabularies, levels_used }: PageProps<VocabularyProps>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Vocabularies</h2>}
        >
            <Head title="Vocabularies" />

            <AddVocabularyForm stages={stages} />
            <VocabularyList vocabularies={vocabularies} levels_used={levels_used} />
        </AuthenticatedLayout>
    );
}