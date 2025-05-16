'use client';

import Image from 'next/image'
import {CodeBlock} from "@/components/ui/code-block";
import {SignatureGroup} from "@/components/project/signature/signature";
import {
    BlogSvgIcon,
    GiteeSvgIcon,
    GithubSvgIcon, IsqqwSvgIcon
} from "@/components/project/svg-icons/website";
import {Diary} from "@/components/project/diary/diary";
import {IconSunFilled} from "@tabler/icons-react";
import {cn} from "@/lib/utils";
import {PartTitle, PartTitleAction} from "@/components/project/part-title/part-title";
import VerticalToHorizontalScroll
    from "@/components/project/vertical-to-horizontal-scroll/vertical-to-horizontal-scroll";

const HomeHero = () => {
    return <div className='absolute h-screen flex w-full left-0 z-[10] justify-center items-center pointer-events-none'>
        <div className='container flex flex-col md:flex-row justify-around items-center pointer-events-auto'>
            <div className='flex flex-col items-center md:items-start space-y-4 aos-init aos-animate px-2'>
                <div>
                    <div className='w-[30vw] min-w-[300px]'>
                        <SignatureGroup s2Class={'delay-3000!'}></SignatureGroup>
                    </div>

                    <div className='mt-[24px] cursor-default'>
                        <Diary
                            className1={'bg-[rgba(255,255,255,.6)] dark:bg-[rgba(0,0,0,.3)]'}
                            className2={'bg-[rgba(255,255,255,.4)] dark:bg-[rgba(0,0,0,.3)]'}
                            title={'春秋半夏'}
                            date={'2025/5/15'}
                            weather={<IconSunFilled width={24} height={24} color={'#ecca2f'}/>}
                            content={<>
                                <p>
                                    一名 <del className='text-[#f56c6c] font-bold'>吹牛</del> 开发工程师，什么都不会，这也不学那也不学。
                                </p>
                                <p>时间轮回, 一年又一年,你还在想着新技术出来了,</p>
                                <p>
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
                                <p>而你身边的人, 在考虑啥时候买第二套房子,什么时候生二胎,</p>
                                <p>你还在捣鼓你的破代码.</p>
                            </>}></Diary>
                        <div className='mt-[16px] flex'>
                            <a className={'w-[50px] cursor-pointer'} href='https://github.com/MC-YCY' target='_blank'>
                                <GithubSvgIcon></GithubSvgIcon>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'} href='https://gitee.com/yin-chunyang'
                               target='_blank'>
                                <GiteeSvgIcon></GiteeSvgIcon>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'}
                               href='https://www.isqqw.com/pcenter?userid=1790&md=tb' target='_blank'>
                                <IsqqwSvgIcon></IsqqwSvgIcon>
                            </a>
                            <a className={'w-[50px] ml-5 cursor-pointer'} href='http://47.93.248.11/home'
                               target='_blank'>
                                <BlogSvgIcon></BlogSvgIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-md mt-8 md:mt-0 aos-init aos-animate max-w-[100%] hidden lg:block'>
                <CodeBlock
                    className='bg-[rgba(25,25,25,.8)] shadow-2xl pt-0 pl-1 pb-2'
                    language="ts"
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

const HomeData = () => {
    return <div className={cn(
        'max-w-[100rem] mx-auto py-10 px-2 md:px-8',
    )}>
        <div className={cn(
            'flex flex-col justify-between',
            'md:flex-row md:justify-between',
            'h-auto md:h-[400px]'
        )}>
            <div className={cn(
                'flex flex-col justify-between',
                'w-full md:w-[316px]'
            )}>
                <div className="w-full h-[188px] bg-red-500"></div>
                <div className={'h-[20px]'}></div>
                <div className="w-full h-[188px] bg-sky-400"></div>
            </div>

            <div className="hidden md:block w-[40px]"></div>

            <div className={cn(
                'w-full',
                'hidden',
                'md:flex-1',
                'md:block',
                'bg-gray-300'
            )}>

            </div>
        </div>
    </div>
}

const HomeCode = () => {
    const tabs = [
        {label: '全部', value: 'all'},
        {label: 'Vue', value: 'vue'},
        {label: 'React', value: 'react'},
        {label: 'Echarts', value: 'echarts'},
        {label: 'JavaScript', value: 'js'},
    ]
    return <div className={'max-w-[100rem] mx-auto py-10 px-2 md:px-8'}>
        <PartTitle title={'一些"小挂件"'} description={'重复造的轮子罢了，知其然不知其所以然...'} action={
            <div className={'max-w-[100%] lg:max-w-[332px] overflow-x-hidden'}>
                <VerticalToHorizontalScroll>
                    <PartTitleAction tabs={tabs}></PartTitleAction>
                </VerticalToHorizontalScroll>
            </div>
        }></PartTitle>
    </div>
}

const HomeDiary = () => {
    return <div className={'max-w-[100rem] mx-auto py-10 px-2 md:px-8'}>

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
                className='absolute w-[27vw] h-[27vw] bg-[#c29f92] dark:bg-[#293558] left-[5.46vw] bottom-[10vh] rounded-[50%] opacity-30'></div>
            <div
                className='absolute w-[11vw] h-[11vw] bg-[#daaf9d] dark:bg-[#566fa8] left-[40.33vw] bottom-[20vh] rounded-[50%] opacity-20'></div>
        </div>
        <HomeData></HomeData>
        <HomeCode></HomeCode>
        <HomeDiary></HomeDiary>
    </div>
}
