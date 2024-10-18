import { VocabularyCardProps } from "@/types";
import { Link } from "@inertiajs/react";
import capitalize from "@/utils/capitalize";

export default function VocabularyCard({ vocabulary }: VocabularyCardProps) {
    return (
        <div className="flex flex-row items-center">
            <Link
                href={route('vocabularies.show', vocabulary.ideograms)}
                className='flex flex-1 text-white items-center justify-between bg-purple-400 p-3 border-white border border-y-[0.5px]'>
                <span className="text-2xl">{vocabulary.ideograms}</span>
                <div className="flex flex-col items-end">
                    <span className="text-sm">{vocabulary.readings.slice(0,10)}</span>
                    <span>{capitalize(vocabulary.meaning)}</span>
                </div>
            </Link>
            <Link
                href={route('vocabularies.destroy', vocabulary.id)}
                as="button" method="delete"
                className="hidden bg-red-300 border-2 border-l-0 border-transparent max-h-12
                    md:flex
                    hover:cursor-pointer hover:border-black ">
                x
            </Link>
        </div>
    );
}