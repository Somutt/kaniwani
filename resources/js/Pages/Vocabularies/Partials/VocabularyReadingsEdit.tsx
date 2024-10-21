import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEventHandler, useState } from "react";
import { VocabularyCardProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { ModeEdit } from "@mui/icons-material";

export default function VocabularyReadingsEdit({ vocabulary }: VocabularyCardProps) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        readings: vocabulary.readings
    });

    const [editing, setEditing] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        setEditing(false);

        patch(route('vocabularies.show', vocabulary.id), { onSuccess: () => setEditing(false) })
    }

    return (
        <form onSubmit={submit}>
            <div className="flex items-center text-2xl border-b my-2">
                <h2>Readings </h2>
                <span onClick={ () => setEditing(true) } >
                    <ModeEdit className='hover:text-green-500 hover:cursor-pointer ml-1' />
                </span>
            </div>
            <div className="max-w-4xl flex items-center py-2 justify-between">
                {editing ?
                    <TextInput
                    isFocused
                    maxLength={20}
                    className="rounded-md py-2"
                    value={data.readings}
                    onChange={ (e) => setData('readings', e.target.value) }
                    />
                :
                    <span className="text-lg">{vocabulary.readings}</span>
                }
            </div>
            {editing ? 
                <div className="space-x-2">
                    <PrimaryButton className="py-2" type="submit">Save</PrimaryButton>
                    <button
                        onClick={() => { setEditing(false); reset(); clearErrors(); } } >
                        Cancel
                    </button>
                </div>
            :
                ''
            }
        </form>
    );
}