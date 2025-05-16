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
import {ProjectCard} from "@/components/project/project-card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Scrollbar} from 'swiper/modules';

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
    return <div className={cn('max-w-[100rem] mx-auto py-10 px-2 md:px-8')}>
        <div className={'xl:flex md:flex block flex-wrap'}>
            <div className={'xl:min-w-[320px] md:min-w-[320px]'}>
                <div
                    className={'w-full flex flex-col justify-center h-[190px] bg-[linear-gradient(121deg,rgba(186,255,16,0.1)_0%,rgba(255,37,243,0.09)_100%)] rounded-[14px] py-[32px] px-[40px] cursor-pointer  bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)]'}>
                    <div className={'text-[64px] h-[64px] flex items-center text-foreground'}>6864</div>
                    <div className={'text-[16px] h-[16px] flex items-center my-[10px] text-foreground'}>总访问量</div>
                </div>
                <div
                    className={'w-full flex flex-col justify-center h-[190px] mt-[20px] bg-[linear-gradient(121deg,rgba(255,57,244,0.1)_0%,rgba(45,86,255,0.1)_100%)] rounded-[14px] py-[32px] px-[40px] cursor-pointer  bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)]'}>
                    <div className={'text-[64px] h-[64px] flex items-center text-foreground'}>679</div>
                    <div className={'text-[16px] h-[16px] flex items-center my-[10px] text-foreground'}>今日访问</div>
                </div>
            </div>
            <div
                className={'flex-1 xl:ml-[20px] md:ml-[20px] xl:mt-0 md:mt-0 md:w-[100%] mt-[20px] h-[400px] rounded-[14px] overflow-hidden  bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)]'}>
                <Swiper
                    className={'w-full h-full'}
                    scrollbar={{
                        hide: false,
                        horizontalClass: 'custom-swiper-scrollbar',
                    }}
                    autoplay={{
                        delay: 6000,
                    }}
                    modules={[Scrollbar, Autoplay]}>
                    <SwiperSlide>
                        <div className={'w-full h-full relative'}>
                            <div
                                className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(90deg,var(--background),rgba(255,255,255,.1))]'}>
                                <div className={'w-[100%] flex flex-col p-[40px] xl:w-[470px]'}>
                                    <div className={'text-[32px] line-[1.34]'}>ISQQW</div>
                                    <div
                                        className={'text-[16px] line-[1.5] pt-[16px]'}>Echarts示例最佳网站、这里有你想象不到的效果图
                                    </div>
                                    <div className={'pt-[16px] text-[16px] text-foreground opacity-60'}>
                                        ECharts是一款强大的数据可视化工具，提供丰富的图表类型和交互体验。我们的社区是ECharts用户交流、学习和分享的平台，您可以在这里：无论您是初学者还是专业人士，这里都是您学习和成长的最佳选择！欢迎加入，共同推动数据可视化的发展。
                                    </div>
                                </div>
                            </div>
                            <Image
                                fill={true}
                                objectFit={'cover'}
                                src='/images/yy01.jpg' alt=''></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'w-full h-full relative'}>
                            <div
                                className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(90deg,var(--background),rgba(255,255,255,.1))]'}>
                                <div className={'w-[100%] flex flex-col p-[40px] xl:w-[470px]'}>
                                    <div className={'text-[32px] line-[1.34]'}>ISQQW</div>
                                    <div
                                        className={'text-[16px] line-[1.5] pt-[16px]'}>Echarts示例最佳网站、这里有你想象不到的效果图
                                    </div>
                                    <div className={'pt-[16px] text-[16px] text-foreground opacity-60'}>
                                        ECharts是一款强大的数据可视化工具，提供丰富的图表类型和交互体验。我们的社区是ECharts用户交流、学习和分享的平台，您可以在这里：无论您是初学者还是专业人士，这里都是您学习和成长的最佳选择！欢迎加入，共同推动数据可视化的发展。
                                    </div>
                                </div>
                            </div>
                            <Image
                                fill={true}
                                objectFit={'cover'}
                                src='/images/yy02.jpg' alt=''></Image>
                        </div>
                    </SwiperSlide>
                </Swiper>
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
                <VerticalToHorizontalScroll speed={0.2}>
                    <PartTitleAction tabs={tabs}></PartTitleAction>
                </VerticalToHorizontalScroll>
            </div>
        }></PartTitle>
        <div className="mt-6 gap-4 block md:grid md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986_dark.png'}></ProjectCard>
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986_light.png'}></ProjectCard>
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986.png'}></ProjectCard>
        </div>
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
