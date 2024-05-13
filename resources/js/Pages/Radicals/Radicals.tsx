import { Head } from "@inertiajs/react";
import AddRadicalForm from "./Partials/AddRadicalForm";

export type RadicalsTypeProps = {
    radicals?: {
        id?: number;
        ideogram?: string;
        meaning?:string;
        level?: number;
        level_id?: number;
    }[],
    keys?: number[]
};

export default function Radicals({ radicals = [], keys = [] }: RadicalsTypeProps) {
    console.log(radicals);
    console.log(keys);
    return (
        <main>
            <Head title="Radicals"/>
            <h2>Hello World! (Radicals)</h2>
            <section className="mt-6 mx-5 px-4 py-3 bg-slate-100 rounded-md">
                <div className="mt-6 mb-4">
                    <h2 className="text-2xl font-light text-slate-500">Radicals</h2>
                    <ol>
                        {
                            keys.map( k => <li><h3>Level {k}</h3> {radicals.map( r => r.level === k ? <p>{r.ideogram}</p> : '')} </li>)
                        }
                    </ol>
                </div>
                <AddRadicalForm/>
            </section>
        </main>
    );
}
