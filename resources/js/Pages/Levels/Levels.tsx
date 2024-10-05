import { Head } from "@inertiajs/react";
import LevelSelector from "./Partials/LevelSelector";
import { LevelProps, PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AddLevelForm from "./Partials/AddLevelForm";

export default function Levels({ auth, levels }: PageProps<LevelProps>) { // { levels }: LevelsProps
    return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Levels</h2>}
            >
                <Head title="Levels"/>

                <AddLevelForm />
                <LevelSelector levels={levels} />
            </AuthenticatedLayout>
    );
}
