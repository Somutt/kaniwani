import PrimaryButton from "@/Components/PrimaryButton";
import capitalize from "@/utils/capitalize";
import { FormEventHandler, useState } from "react";
import { AttachVocabularyProps } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { Add } from "@mui/icons-material";

export default function AttachVocabulary({ kanji, vocabularies, kanjiVocabs }: AttachVocabularyProps) {
    const { data, setData, post, reset, clearErrors } = useForm({
        kanjiId: kanji.id,
        ideograms: vocabularies[0].ideograms
    });

    const [editing, setEditing] = useState(false);

    const submitVocabulary: FormEventHandler = (e) => {
        e.preventDefault();

        setEditing(false);

        post(route('kanji_vocab.store', data.kanjiId), { onSuccess: () => reset() })
    }

    return (
        <>
            <h2 className="text-2xl border-b">Found in Vocabularies</h2>
            <div className="md:flex md:flex-col md:max-w-5xl mx-auto py-2">
                <div>
                    <ul className="flex flex-col items-center">
                    {kanjiVocabs.map ( (kv) => 
                        <li key={Math.random()} className="flex flex-row items-center w-full" >
                            <Link href={route('vocabularies.show', kv.ideograms)}
                                className='flex flex-1 text-white items-center justify-between bg-purple-400 p-3 border-white border border-y-[0.5px] w-full'
                                >
                                <span className="text-2xl">{kv.ideograms}</span>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm">{kv.readings.slice(0,10)}</span>
                                    <span>{capitalize(kv.meaning)}</span>
                                </div>
                            </Link>
                            <Link
                                href={route('kanji_vocab.destroy', [kanji.id, kv.id])}
                                as="button" method="delete"
                                className="hidden bg-red-300 border-2 border-l-0 border-transparent max-h-12
                                    md:flex
                                    hover:cursor-pointer hover:border-black ">
                                x
                            </Link>
                        </li>
                    )}
                    </ul>
                </div>
                {editing ?
                <form onSubmit={submitVocabulary}
                    className="flex flex-col justify-items-begin">
                    <select id="vocabulary" name="vocabulary" className="rounded-md w-36 mr-2" value={data.ideograms} onChange={ (e) => setData('ideograms', e.target.value) } >
                        {vocabularies.map( (v) => <option key={v.id} >{v.ideograms}</option> )}
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
                    className={`hidden border border-purple-400 rounded-md p-2 w-16 text-gray-500 hover:text-purple-400 transition ease-in-out duration-150 mt-1 
                                ${editing ? 'hidden' : ''}
                                md:flex md:justify-center`}>
                    <Add />
                </button>
            </div>
        </>
    );
}