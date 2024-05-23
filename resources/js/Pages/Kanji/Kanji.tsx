import { Head } from "@inertiajs/react";
import AddKanjiForm from "./Partials/AddKanjiForm";

export default function Kanji() {
    return (
        <main>
            <Head title="Kanji"/>
            <AddKanjiForm />
        </main>
    );
}
