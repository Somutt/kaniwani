import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { StageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddRadicalForm({ stages }: StageProps) {
    const { data, setData, post, reset, errors } = useForm({
        ideogram: '',
        meaning: '',
        stage: String(stages[0].stage_number)
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('radicals.store'), { onSuccess: () => reset('ideogram', 'meaning') });
    }
    
    return (
        <form className="hidden mt-2 md:flex md:flex-col md:items-center"
            onSubmit={submit} 
            >
            <div className="md:flex md:flex-row md:w-full md:items-center md:justify-center">
                <input className="rounded-md px-4 py-2 mr-2 w-36"
                    type="text" placeholder="Ideogram" maxLength={1}
                    onChange={ e => setData('ideogram', e.target.value)}
                    value={data.ideogram}>
                </input>
                <input className="rounded-md px-4 py-2 mr-2"
                    type="text" placeholder="Meaning" maxLength={20}
                    onChange={ e => setData('meaning', e.target.value)}
                    value={data.meaning}>
                </input>
                <select id="stage" name="stage" className="rounded-md w-36 mr-2" value={data.stage} onChange={ (e) => setData('stage', e.target.value) } >
                    {stages.map( (s) => <option key={s.id} >{s.stage_number}</option> )}
                </select>
                <PrimaryButton type="submit">
                    Add Radical
                </PrimaryButton>
            </div>
            <div className="flex w-full mx-auto justify-center">
                <InputError message={errors.ideogram} className='mt-2 mr-2'/>
                <InputError message={errors.meaning} className='mt-2'/>
                <InputError message={errors.stage} className='mt-2'/>
            </div>
        </form>
    );
}
