import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddKanjiForm from "./Partials/AddKanjiForm";
import { KanjiProps, PageProps } from "@/types";
import KanjiList from "./Partials/KanjiList";

export default function Kanji({ auth, stages, kanjis, levels_used }: PageProps<KanjiProps>) {
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Kanji</h2>}
        >
            <Head title="Kanji" />

            <AddKanjiForm stages={stages} ></AddKanjiForm>
            <KanjiList kanjis={kanjis} levels_used={levels_used} />
        </AuthenticatedLayout>
    );
}
