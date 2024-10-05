import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, RadicalProps, StageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import AddRadicalForm from "./Partials/AddRadicalForm";

export default function Radicals({ auth, stages, radicals, levels_used }: PageProps<RadicalProps>) {
    console.log(radicals);
    console.log(levels_used);
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Radicals</h2>}    
        >
            <Head title="Radicals" />

            <AddRadicalForm stages={stages} />

        </AuthenticatedLayout>
    );
}
