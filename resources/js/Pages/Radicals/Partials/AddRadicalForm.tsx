import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddRadicalForm() {
    const { data, setData, post, reset, errors } = useForm({
        ideogram: '',
        level: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('radicals.store'), { onSuccess: () => reset('ideogram') });
    }

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Ideogram" maxLength={1}
                onChange={ e => setData('ideogram', e.target.value)}
                value={data.ideogram}>
            </input>
            <input type="text" placeholder="Level" maxLength={2}
                onChange={ e => setData('level', e.target.value)}
                value={data.level}>
            </input>
            <button
                className="ml-2 bg-red-400 p-2 border-2 border-transparent hover:border-2 hover:border-black"
                type="submit">Add Radical
            </button>
            <InputError message={errors.ideogram} className='mt-2'/>
            <InputError message={errors.level} className='mt-2'/>
        </form>
    );
}
