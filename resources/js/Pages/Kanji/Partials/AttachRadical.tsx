import PrimaryButton from "@/Components/PrimaryButton";
import { FormEventHandler, useState } from "react";
import { Add } from "@mui/icons-material";
import { KanjiPageProps } from "@/types";
import { Link, useForm } from "@inertiajs/react";

export default function AttachKanji({ kanji, radicals, kanjiRadicals }: KanjiPageProps) {
   const { data, setData, post, reset, clearErrors, errors } = useForm({
        kanjiId: kanji.id,
        ideogram: radicals[0].ideogram,
    })

    const [editing, setEditing] = useState(false);

    const submitRadical: FormEventHandler = (e) => {
        e.preventDefault();

        setEditing(false);

        post(route('kanji_radical.store', data.kanjiId), { onSuccess: () => reset() });
    }

    return (
        <>
            <h2 className="text-2xl border-b">Radical Combination</h2>
            <div className="hidden md:max-w-4xl mx-auto p-2 md:flex">
            <div>
                <ul className="flex items-center text-white">
                {kanjiRadicals.map ( (kr) => 
                    <li key={Math.random()}>
                        <Link href={route('kanji_radical.destroy', [kanji.id, kr.id])}
                            as="button" method="delete"
                            className="text-xl bg-sky-400 p-2 border border-white rounded-md mr-2"
                            >
                            {kr.ideogram}
                        </Link>
                    </li>
                )}
                </ul>
            </div>
            {editing ?
                <form onSubmit={submitRadical}
                    className="flex flex-col justify-items-begin">
                    <select id="radical" name="radical" className="rounded-md w-36 mr-2" value={data.ideogram} onChange={ (e) => setData('ideogram', e.target.value) } >
                        {radicals.map( (r) => <option key={r.id} >{r.ideogram}</option> )}
                    </select>
                    <div className="space-x-2">
                        <PrimaryButton className="max-w-fit mt-2">Save</PrimaryButton>
                        <span
                            className='mt-4 hover:cursor-pointer'
                            onClick={() => { setEditing(false); reset(); clearErrors(); } } >
                            Cancel
                        </span>
                    </div>
                </form>
            :
                ''
            }
            <button onClick={ () => setEditing(true) }
            className={`border border-cyan-400 rounded-md p-2 text-gray-500 hover:text-cyan-400 transition ease-in-out duration-150 ml-3 ${editing ? 'hidden' : ''}`}>
                <Add />
            </button>
        </div>
        </>
    );
}