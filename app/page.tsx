'use client';

import Image from 'next/image'
import {CodeBlock} from "@/components/ui/code-block";
import {SignatureGroup} from "@/components/project/signature/signature";
import {
    MeAccountBlog,
    MeAccountGitee,
    MeAccountGithub,
    MeAccountIsqqw
} from "@/components/project/me-account/me-account";

const HomeHero = () => {
    return <div className='absolute h-screen flex w-full left-0 z-[10] justify-center items-center pointer-events-none'>
        <div className='container flex flex-col md:flex-row justify-around items-center pointer-events-auto'>
            <div className='flex flex-col items-center md:items-start space-y-4 aos-init aos-animate px-2'>
                <div>
                    <div className='w-[30vw] min-w-[300px]'>
                        <SignatureGroup s2Class={'delay-3000!'}></SignatureGroup>
                    </div>
                    <div className='mt-[24px] cursor-default'>
                        <p className='text-[#e4d7c9] mb-[16px] text-shadow-lg text-lg'>
                            一名 <del className='text-[#ecca2f] text-2xl'>吹牛</del> 开发工程师，什么都不会，这也不学那也不学.
                        </p>
                        <div className='text-base'>
                            <p className='my-[6px] text-[#e4d7c9] text-shadow-lg'>
                                时间轮回, 一年又一年,
                                你还在想着新技术出来了,</p>
                            <p className='my-[6px] text-[#e4d7c9] text-shadow-lg'>
                                继续学习什么
                                <a className='text-[#0070f3] font-bold cursor-pointer' target='_blank'
                                   href='https://nextjs.org/'>NextJs</a>
                                , 什么
                                <a className='text-[#00c16a] font-bold cursor-pointer' target='_blank'
                                   href='https://nuxt.com/'>NuxtJs</a>
                                , 什么
                                <a className='text-[#ea285a] font-bold cursor-pointer' target='_blank'
                                   href='https://nestjs.com/'>NestJs</a>
                                ......
                            </p>
                            <p className='my-[6px] text-[#e4d7c9] text-shadow-lg'>而你身边的人, 在考虑啥时候买第二套房子,
                                什么时候生二胎,</p>
                            <p className='my-[6px] text-[#e4d7c9] text-shadow-lg'>你还在捣鼓你的破代码.</p>
                        </div>
                        <div className='mt-[16px] flex'>
                            <a className={'w-[50px] cursor-pointer'} href='https://github.com/MC-YCY' target='_blank'>
                                <MeAccountGithub></MeAccountGithub>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'} href='https://gitee.com/yin-chunyang'
                               target='_blank'>
                                <MeAccountGitee></MeAccountGitee>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'}
                               href='https://www.isqqw.com/pcenter?userid=1790&md=tb' target='_blank'>
                                <MeAccountIsqqw></MeAccountIsqqw>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'} href='http://47.93.248.11/home'
                               target='_blank'>
                                <MeAccountBlog></MeAccountBlog>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-md mt-8 md:mt-0 aos-init aos-animate max-w-[100%] hidden lg:block'>
                <CodeBlock
                    className='bg-[rgba(25,25,25,.4)] shadow-2xl pt-0 pl-1 pb-2'
                    language="jsx"
                    filename="Developer.ts"
                    code={`class Developer {
    name: string;
    skills: string[];
    age: number;
    constructor() {
        this.name = 'chunQiuBanXia';
        this.skills = [
            'Vue',
            'React'
            'Angular',
            'NestJs',
            'NextJs'
        ];
        this.age = new Date().getFullYear() - 2003;  
    }
}
const me = new Developer();`}
                />
            </div>
        </div>
    </div>
}

export default function Home() {
    return <div>
        <div className='w-full h-screen relative overflow-hidden'>
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
            <div
                className='absolute w-[27vw] h-[27vw] bg-[#c29f92] dark:bg-[#293558] left-[5.46vw] bottom-[10vh] rounded-[50%] opacity-20'></div>
            <div
                className='absolute w-[11vw] h-[11vw] bg-[#daaf9d] dark:bg-[#566fa8] left-[27.33vw] bottom-[40vh] rounded-[50%] opacity-10'></div>
        </div>
    </div>
}
