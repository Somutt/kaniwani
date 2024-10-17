import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import capitalize from "@/utils/capitalize";
import { PageProps, RadicalPageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { ModeEdit } from "@mui/icons-material";
import { FormEventHandler, useState } from "react";

export default function RadicalPage({ auth, radical, kanjis }: PageProps<RadicalPageProps>)  {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        meaning: radical.meaning
    });

    const [editing, setEditing] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('radicals.update', radical.id), { onSuccess: () => setEditing(false) } );
    }

    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-700 leading-tight">Radical - {radical.meaning}</h2>}
        >
            <Head title={`Radical / ${radical.meaning}`}/>

            <header className="max-w-5xl mx-auto p-3 flex items-center my-6">
                <div className="flex text-center text-2xl leading-[3rem] mr-4">
                    <Link href={route('radicals.index')} 
                        className="bg-slate-400 text-slate-100 shadow-md rounded w-12 h-12 mr-2">
                        {radical.level}
                    </Link>
                    <span className="bg-blue-400 text-white shadow-md rounded w-12 h-12 mr-2">{radical.ideogram}</span>
                </div>
                <h1 className="text-4xl font-thin">{radical.meaning}</h1>
            </header>

            <div className="max-w-5xl mx-auto p-3">
                <h2 className="text-2xl border-b mb-2">Name</h2>
                <span className="text-slate-400 font-thin">Primary </span>
                {editing ?
                    <form onSubmit={submit}>
                        <TextInput 
                            isFocused
                            maxLength={20}
                            className="rounded-md px-4 py-2"
                            value={data.meaning}
                            onChange={ (e) => setData('meaning', e.target.value) }
                        />
                        <div className='space-x-2'>
                            <PrimaryButton className='mt-4'>Save</PrimaryButton>
                            <button
                                className='mt-4'
                                onClick={() => { setEditing(false); reset(); clearErrors(); } } >
                                Cancel
                            </button>
                            <InputError message={errors.meaning} className='mt-2' />
                        </div>
                    </form>
                : 
                    <div className="inline-flex items-center">
                        <span className="font-medium ml-1">{radical.meaning}</span>
                        <button 
                            onClick={ () => setEditing(true) }
                            >
                            <ModeEdit className='hover:text-green-500 ml-1' />
                        </button>
                    </div>
                }
            </div>
            <div className="max-w-5xl mx-auto p-3">
                <h2 className="text-2xl border-b">Found in Kanji</h2>
            </div>
            <ul className="max-w-5xl mx-auto p-3 flex flex-wrap items-center">
                {kanjis.map( k => 
                    <li key={k.id} className="flex flex-col items-center justify-between flex-1 text-white bg-fuchsia-400 p-3 border border-white 
                        min-w-28 max-w-28 min-h-28 max-h-28">
                        <span className="text-4xl">{k.ideogram}</span>
                        <div className="flex flex-col items-center text-sm">
                            <span>{k.onyomi ? k.onyomi.slice(0,3) : k.kunyomi?.slice(0,3)}</span>
                            <span>{k.meaning.length <= 10 ? capitalize(k.meaning) : capitalize(k.meaning.slice(0, 7)) + " ..."}</span>
                        </div>
                    </li>
                )}
            </ul>
        </AuthenticatedLayout>
    )
}
