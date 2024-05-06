
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Edit({ auth, laravelVersion, phpVersion }: PageProps<{laravelVersion: string, phpVersion:string}>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight
                        dark:text-gray-200">
                        Admin EDIT
                    </h2>}
        >
            <Head title="ADMIN KANIWANI"/>

            <footer className="py-16 text-center text-sm text-black
                    dark:text-white/70">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
        </Authenticated>
    );
}
