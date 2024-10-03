import { Head } from "@inertiajs/react";
import LevelSelector from "./Partials/LevelSelector";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Levels({ auth }: PageProps) { // { levels }: LevelsProps
    return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Levels</h2>}
            >

            <Head title="Levels"/>
            {/* <LevelSelector levels={levels} /> */}
            </AuthenticatedLayout>
    );
}
