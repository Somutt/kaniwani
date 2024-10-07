import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddLevelForm() {
    const { data, setData, post, reset, errors} = useForm({
        level_number: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('levels.store'), { onSuccess: () => reset() });
    }

    return (
        <form className="hidden w-full md:flex flex-col items-center mt-2"
            onSubmit={submit}
            >
            <div className="flex items-center justify-center p-3">
                <input className="rounded-md w-36 px-4 py-2 mr-2" 
                    type="text" placeholder="Level number" maxLength={2}
                    onChange={e => setData('level_number', e.target.value)}
                    value={data.level_number}>
                </input>
                <PrimaryButton type="submit">
                    Add Level
                </PrimaryButton>
            </div>
            <InputError message={errors.level_number} />
        </form>
    );
}
