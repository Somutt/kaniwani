import { KanjiCardProps } from "@/types";
import { Link } from "@inertiajs/react";
import capitalize from "@/utils/capitalize";

export default function KanjiCard({ kanji }: KanjiCardProps) {

    return (
        <div className="flex flex-row items-center md:flex-col">
            <Link
                href={route('kanji.show', kanji.ideogram)}
                className='flex items-center flex-1 text-white bg-fuchsia-400 p-3 border-white border border-y-[0.5px sm:] justify-between
                            md:flex-col md:justify-center md:min-w-32 md:max-w-32 md:min-h-32 md:border-r md:border-y'>
                <span className="md:text-5xl md:mb-3 text-2xl">{kanji.ideogram}</span>
                <div className="flex flex-col items-end md:items-center">
                    <span className="text-sm">{kanji.onyomi ? kanji.onyomi.slice(0,3) : kanji.kunyomi?.slice(0,3)}</span>
                    <span>{kanji.meaning.length <= 10 ? capitalize(kanji.meaning) : capitalize(kanji.meaning.slice(0, 7)) + " ..."}</span>
                </div>
            </Link>
            <Link
                href={route('kanji.destroy', kanji.id)}
                as="button" method="delete"
                className="hidden bg-red-300 border-2 border-l-0 border-transparent max-h-12
                    md:flex md:mb-2 md:p-1 md:border-t-0 md:border-l-2
                    hover:cursor-pointer hover:border-black ">
                delete
            </Link>
        </div>
    );
}