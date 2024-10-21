import { AttachVocabularyProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function AttachVocabulary({ kanji, vocabularies, kanjiVocabs }: AttachVocabularyProps) {
    const { data, setData, post, reset, clearErrors } = useForm({
        kanjiId: kanji.id,
        ideograms: vocabularies[0].ideograms
    });

    const [editing, setEditing] = useState(false);

    const submitVocabulary: FormEventHandler = (e) => {
        e.preventDefault();

        setEditing(false);

    }

    return (
        <>
            <h2 className="text-2xl border-b">Found in Vocabularies</h2>
            <div className="hidden md:max-w-5xl mx-auto py-2 md:flex">
                
            </div>
        </>
    );
}