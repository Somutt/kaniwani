import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, RadicalProps, StageProps } from "@/types";
import { Head } from "@inertiajs/react";
import AddRadicalForm from "./Partials/AddRadicalForm";
import RadicalList from "./RadicalList";

export default function Radicals({ auth, stages, radicals, levels_used }: PageProps<RadicalProps>) {
    console.log(radicals);
    console.log(levels_used);
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Radicals</h2>}    
        >
            <Head title="Radicals" />

            <AddRadicalForm stages={stages} />
            <RadicalList radicals={radicals} levels_used={levels_used} />
        </AuthenticatedLayout>
    );
}
