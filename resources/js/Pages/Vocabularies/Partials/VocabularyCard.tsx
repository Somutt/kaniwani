import { VocabularyCardProps } from "@/types";
import { Link } from "@inertiajs/react";
import capitalize from "@/utils/capitalize";

export default function VocabularyCard({ vocabulary }: VocabularyCardProps) {
    return (
        <div className="flex flex-row">
            <Link
                href={route('vocabularies.show', vocabulary.ideograms)}
                className='flex flex-1 text-white items-center justify-between bg-purple-400 p-3 border-white border border-y-[0.5px]'>
                <span className="text-2xl">{vocabulary.ideograms}</span>
                <div className="flex flex-col items-end">
                    <span className="text-sm">{vocabulary.readings.slice(0,10)}</span>
                    <span>{capitalize(vocabulary.meaning)}</span>
                </div>
            </Link>
        </div>
    );
}