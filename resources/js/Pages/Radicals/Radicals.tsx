import { Head } from "@inertiajs/react";
import RadicalSection from "./Partials/RadicalSection";

export type RadicalsTypeProps = {
    radicals?: {
        ideogram?: string,
        level_id?: number
    }[]
};

export default function Radicals({ radicals }: RadicalsTypeProps) {
    return (
        <main>
            <Head title="Radicals"/>
            <h2>Hello World! (Radicals)</h2>
            <RadicalSection />
        </main>
    );
}
