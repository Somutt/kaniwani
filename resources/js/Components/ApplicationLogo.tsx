import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img src='https://assets.wanikani.com/assets/logo--retro-colors-94b3ff82.png' 
            alt='Application logo, stilized aligator outline in blue. Also the KaniWani word in bright pink'
            width={155} height={34}
        />
    );
}
