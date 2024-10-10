import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { ModeEdit } from "@mui/icons-material";
import { KanjiCardProps } from "@/types";
import { FormEventHandler, useState } from "react";
import { useForm } from "@inertiajs/react";

export default function KanjiReadingEdit({ kanji }: KanjiCardProps) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        onyomi: kanji.onyomi,
        kunyomi: kanji.kunyomi
    });
    
    const [editing, setEditing] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('kanji.update', kanji.id), { onSuccess: () => setEditing(false) } );
    }

    return (
        <form onSubmit={submit}>
            <div className="flex items-center text-2xl border-b my-2">
                <h2>Readings </h2>
                <span onClick={ () => setEditing(true) } >
                    <ModeEdit className='hover:text-green-500 hover:cursor-pointer ml-1' />
                </span>
            </div>
            <div className="max-w-4xl flex items-center py-4 justify-between">
                <div className="flex flex-col items-begin">
                    <span className="text-lg">On'yomi</span>
                    {editing ?
                        <TextInput
                        isFocused
                        maxLength={20}
                        className="rounded-md py-2"
                        value={data.onyomi}
                        onChange={ (e) => setData('onyomi', e.target.value) }
                        />
                    :
                        <span className="py-2">{kanji.onyomi ? kanji.onyomi : 'None'}</span>
                    }
                </div>
                <div className="flex flex-col items-begin">
                    <span className="text-lg">Kun'Yomi</span>
                    {editing ?
                        <TextInput
                        maxLength={20}
                        className="rounded-md py-2"
                        value={data.kunyomi}
                        onChange={ (e) => setData('kunyomi', e.target.value) }
                        />
                    :
                        <span className="py-2">{kanji.kunyomi ? kanji.kunyomi : 'None'}</span>
                    }
                </div>
                <div className="flex flex-col items-begin">
                    <span className="text-lg">Nanori</span>
                    <span className="py-2">None</span>
                </div>
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