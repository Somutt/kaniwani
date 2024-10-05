import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import AddRadicalForm from "./Partials/AddRadicalForm";

export default function Radicals({ auth }: PageProps) {
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Radicals</h2>}    
        >
            <Head title="Radicals" />

        </AuthenticatedLayout>
    );
}
