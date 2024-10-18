import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { StageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddVocabularyForm({ stages }: StageProps) {
    const { data, setData, post, reset, errors } = useForm({
        ideograms: '',
        meaning: '',
        secondary_meanings: '',
        readings: '',
        level: '',
        stage: String(stages[0].stage_number)
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('vocabularies.store'), { onSuccess: () => reset('ideograms', 'meaning', 'secondary_meanings', 'readings', 'level') })
    }

    return (
        <form className="hidden mt-2 md:flex md:flex-col md:items-center"
            onSubmit={submit}
            >
            <div className="md:flex md:flex-col md:items-start md:justify-start md:max-w-3xl md:mx-auto">
            <div className="p-1">
                    <input className="rounded-md px-4 py-2 mr-2 w-36" 
                        type="text" placeholder="Ideograms" maxLength={8}
                        onChange={ e => setData('ideograms', e.target.value)}
                        value={data.ideograms}>
                    </input>
                    <input className="rounded-md px-4 py-2 mr-2"
                        type="text" placeholder="Readings" maxLength={15}
                        onChange={ e => setData('readings', e.target.value)}
                        value={data.readings}>
                    </input>
                    <select id="stage" name="stage" className="rounded-md w-36" value={data.stage} onChange={ (e) => setData('stage', e.target.value) } >
                        {stages.map( (s) => <option key={s.id} >{s.stage_number}</option> )}
                    </select>
                    <div className="flex items-center">
                        <InputError message={errors.ideograms} className='mt-1 mr-2'/>
                        <InputError message={errors.readings} className='mt-1 mr-2'/>
                        <InputError message={errors.stage} className='mt-1'/>
                    </div>
                </div>
                <div className="p-1">
                    <input className="rounded-md px-4 py-2 mr-2"
                        type="text" placeholder="Meaning" maxLength={30}
                        onChange={ e => setData('meaning', e.target.value)}
                        value={data.meaning}>
                    </input>
                    <input className="rounded-md px-4 py-2 mr-2"
                        type="text" placeholder="Secondary Meanings" maxLength={30}
                        onChange={ e => setData('secondary_meanings', e.target.value)}
                        value={data.secondary_meanings}>
                    </input>
                    <div className="flex items-center">
                        <InputError message={errors.meaning} className='mt-1 mr-2'/>
                        <InputError message={errors.secondary_meanings} className='mt-1 mr-2'/>
                    </div>
                </div>
                <div className="p-1">
                    <PrimaryButton type="submit">
                        Add Vocabulary
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
}