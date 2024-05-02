import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title='KaniWani'/>
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
        </>
    );
}
