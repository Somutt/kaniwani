import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, VocabularyProps } from "@/types";
import { Head } from "@inertiajs/react";
import AddVocabularyForm from "./Partials/AddVocabularyForm";

export default function Vocabularies({ auth, stages, vocabularies, levels_used }: PageProps<VocabularyProps>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Vocabularies</h2>}
        >
            <Head title="Vocabularies" />

            <AddVocabularyForm stages={stages} />
        </AuthenticatedLayout>
    );
}