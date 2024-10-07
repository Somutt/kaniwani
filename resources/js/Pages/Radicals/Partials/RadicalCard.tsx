import { RadicalCardProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function RadicalCard({ radical }: RadicalCardProps) {
    return (
        <Link 
            href={route('radicals.show', radical.meaning)} 
            className='flex items-center text-white bg-sky-400 p-3 border-white border border-y-[0.5px sm:] justify-between
                        md:flex-col md:justify-center md:min-w-32 md:min-h-32 md:border-r md:border-y'>
            <span className="md:text-5xl md:mb-3 text-2xl">{radical.ideogram}</span>
            <span>{radical.meaning}</span>
        </Link>
    );
}