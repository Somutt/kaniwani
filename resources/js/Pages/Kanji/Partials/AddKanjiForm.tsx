import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddKanjiForm() {
    const { data, setData, post, reset, errors } = useForm({
        ideogram: '',
        meaning: '',
        secondary_meaning: '',
        onyomi: '',
        kunyomi: '',
        level: '',
    });

    const submit: FormEventHandler = (e) => {
        e. preventDefault();

        post(route('kanji.store'), { onSuccess: () => reset('ideogram', 'meaning',
                                                            'onyomi', 'kunyomi',
                                                            'secondary_meaning') });
    }

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Ideogram" maxLength={1}
                onChange={ e => setData('ideogram', e.target.value)}
                value={data.ideogram}>
            </input>
            <input type="text" placeholder="Meaning" maxLength={30}
                onChange={ e => setData('meaning', e.target.value)}
                value={data.meaning}>
            </input>
            <input type="text" placeholder="Secondary Meaning" maxLength={30}
                onChange={ e => setData('secondary_meaning', e.target.value)}
                value={data.secondary_meaning}>
            </input>
            <input type="text" placeholder="Onyomi" maxLength={5}
                onChange={ e => setData('onyomi', e.target.value)}
                value={data.onyomi}>
            </input>
            <input type="text" placeholder="Kunyomi" maxLength={5}
                onChange={ e => setData('kunyomi', e.target.value)}
                value={data.kunyomi}>
            </input>
            <input type="text" placeholder="Level" maxLength={2}
                onChange={ e => setData('level', e.target.value)}
                value={data.level}>
            </input>
            <button
                className="bg-red-400 p-2 border-2 border-transparent hover:border-2 hover:border-black"
                type="submit">Add Kanji
            </button>
            <InputError message={errors.ideogram} className='mt-2'/>
            <InputError message={errors.meaning} className='mt-2'/>
            <InputError message={errors.secondary_meaning} className='mt-2'/>
            <InputError message={errors.onyomi} className='mt-2'/>
            <InputError message={errors.kunyomi} className='mt-2'/>
            <InputError message={errors.level} className='mt-2'/>
        </form>
    );
}
