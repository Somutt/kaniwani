import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddLevelForm() {
    const { data, setData, post, reset, errors} = useForm({
        lesson_level: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('levels.store'), { onSuccess: () => reset() });
    }

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Level number" maxLength={2}
                onChange={e => setData('lesson_level', e.target.value)}
                value={data.lesson_level}>
            </input>
            <button
                className="ml-2 bg-red-400 p-2 border-2 border-transparent hover:border-2 hover:border-black"
                type="submit">Add Level
            </button>
            <InputError message={errors.lesson_level} className='mt-2'/>
        </form>
    );
}
