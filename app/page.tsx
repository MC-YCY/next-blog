'use client';

import Image from 'next/image'

export default function Home() {
    return <div>
        <div className='w-full h-screen relative'>
            <Image
                fill={true}
                objectFit={'cover'}
                className={'home-dark-banner'}
                src='/images/34986_dark.png' alt=''></Image>
            <Image
                fill={true}
                objectFit={'cover'}
                className={'home-light-banner'}
                src='/images/34986_light.png' alt=''></Image>
        </div>
    </div>
}
