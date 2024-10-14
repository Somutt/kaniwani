import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { KanjiPageProps } from "@/types";
import { useForm } from "@inertiajs/react";

export default function AttachKanji({ kanji, radicals }: KanjiPageProps) {
   const { data, setData, post, reset, clearErrors, errors } = useForm({
        ideogram: radicals[0].ideogram,
    })

    const [editing, setEditing] = useState(false);

    return (
        <>
            <h2 className="text-2xl border-b">Radical Combination</h2>
            <div className="hidden md:max-w-4xl mx-auto p-2 md:flex">
            {editing ?
                <form className="flex flex-col justify-items-begin">
                    <select id="radical" name="radical" className="rounded-md w-36 mr-2" value={data.ideogram} onChange={ (e) => setData('ideogram', e.target.value) } >
                        {radicals.map( (r) => <option key={r.id} >{r.ideogram}</option> )}
                    </select>
                    <div className="space-x-2">
                        <PrimaryButton className="max-w-fit mt-2">Save</PrimaryButton>
                        <button
                            className='mt-4'
                            onClick={() => { setEditing(false); reset(); clearErrors(); } } >
                            Cancel
                        </button>
                    </div>
                </form>
            :
                ''
            }
            <button onClick={ () => setEditing(true) }
            className={`border border-cyan-400 rounded-md p-2 text-gray-500 hover:text-cyan-400 transition ease-in-out duration-150 ${editing ? 'hidden' : ''}`}>
                <Add />
            </button>
        </div>
        </>
    );
}