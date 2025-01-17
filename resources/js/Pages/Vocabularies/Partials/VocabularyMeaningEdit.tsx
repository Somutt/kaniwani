import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import capitalize from "@/utils/capitalize";
import { FormEventHandler, useState } from "react";
import { VocabularyCardProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { ModeEdit } from "@mui/icons-material";

export default function VocabularyMeaningEdit({ vocabulary }: VocabularyCardProps) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        meaning: vocabulary.meaning,
        secondary_meanings: vocabulary.secondary_meanings || '' 
    });

    const [editing, setEditing] = useState(false);

    const submitMeaning: FormEventHandler = (e) => {
        e.preventDefault();

        setEditing(false);

        patch(route('vocabularies.update', vocabulary.id));
    }

    return (
        <>
            <div className="flex items-center text-2xl border-b my-2">
                <h2>Meanings</h2>
                <button onClick={ () => setEditing(true) } >
                    <ModeEdit className='hover:text-green-500 ml-1' />
                </button>
            </div>
            <div className="flex flex-col">
                <div className="mb-2 py-2">
                    {editing ?
                        <form onSubmit={submitMeaning}>
                            <div>
                                <span className="text-slate-400 font-thin">Primary </span> 
                                <TextInput
                                    isFocused
                                    maxLength={20}
                                    className="rounded-md px-4 py-2"
                                    value={capitalize(data.meaning)}
                                    onChange={ (e) => setData('meaning', e.target.value) }
                                />
                            </div>

                            <div className="mt-2">
                                <span className="text-slate-400 font-thin">Alternative </span> 
                                <TextInput
                                maxLength={60}
                                className="rounded-md px-4 py-2"
                                value={data.secondary_meanings}
                                onChange={ (e) => setData('secondary_meanings', e.target.value) }
                                />
                            </div>
                            <div className='space-x-2'>
                                <PrimaryButton className='mt-4'>Save</PrimaryButton>
                                <button
                                    className='mt-4'
                                    onClick={() => { setEditing(false); reset(); clearErrors(); } } >
                                    Cancel
                                </button>
                                <InputError message={errors.meaning} className='mt-2' />
                                <InputError message={errors.secondary_meanings} className='mt-2' />
                            </div>
                        </form>
                    :
                        <div>
                            <p>
                                <span className="text-slate-400 font-thin">Primary </span> 
                                <span className="font-medium ml-1">{capitalize(vocabulary.meaning)}</span>
                            </p>
                            {vocabulary.secondary_meanings ?
                                <p>
                                    <span className="text-slate-400 font-thin">Alternative </span> 
                                    <span className="font-medium ml-1">{vocabulary.secondary_meanings}</span>
                                </p>
                            :
                                ''
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
}