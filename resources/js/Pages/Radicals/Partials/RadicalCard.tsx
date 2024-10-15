import { RadicalCardProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function RadicalCard({ radical }: RadicalCardProps) {
    return (
        <div className="flex flex-row items-center md:flex-col">
            <Link 
                href={route('radicals.show', radical.meaning)} 
                className='flex items-center flex-1 text-white bg-sky-400 p-3 border-white border border-y-[0.5px] justify-between
                            md:flex-col md:justify-center md:min-w-32 md:min-h-32 md:border-r md:border-y'>
                <span className="md:text-5xl md:mb-3 text-2xl">{radical.ideogram}</span>
                <span>{radical.meaning}</span>
            </Link>
            <Link
                href={route('radicals.destroy', radical.id)}
                as="button" method="delete"
                className="hidden bg-red-300 border-2 border-l-0 border-transparent max-h-12
                    md:flex md:mb-2 md:p-1 md:border-t-0 md:border-l-2
                    hover:cursor-pointer hover:border-black ">
                delete
            </Link>
        </div>
    );
}