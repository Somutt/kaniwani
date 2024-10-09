import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AddKanjiForm from "./Partials/AddKanjiForm";
import { PageProps } from "@/types";

export default function Kanji({ auth }: PageProps) {
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Kanji</h2>}
        >
            <Head title="Kanji" />

            <></>
        </AuthenticatedLayout>
    );
}
