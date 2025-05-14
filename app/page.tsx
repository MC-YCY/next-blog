'use client';

import Image from 'next/image'
import {CodeBlock} from "@/components/ui/code-block";



const HomeHero = () => {
    return <div className='absolute h-screen flex w-full left-0 z-[10] justify-center items-center pointer-events-none'>
        <div className='container flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col items-center md:items-start space-y-4 aos-init aos-animate'>
                内容内容
            </div>
            <div className='rounded-md mt-8 md:mt-0 aos-init aos-animate'>
                <CodeBlock
                    language="jsx"
                    filename="DummyComponent.jsx"
                    code={`class Person {
    private name: string;
    private age: number;
    private skill: string[];

    constructor(name: string, birth: string,skill: string[]) {
        this.name = name;
        let currentYear = new Date().getFullYear();
        let birthYear = new Date().getFullYear(birth);
        this.age = currentYear - birthYear;
        this.skill = skill;
    }
}
const person = new Person(
    "SA",
    '2003',
    ['Vue','React','Angular','NestJs','NextJs','Tailwind']
);`}
                />
            </div>
        </div>
    </div>
}

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
            <HomeHero></HomeHero>
        </div>
    </div>
}
