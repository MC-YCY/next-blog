'use client';
import {cn} from "@/lib/utils";
import {PartTitle} from "@/components/project/part-title/part-title";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Scrollbar} from "swiper/modules";
import Image from "next/image";

const HomeDataCardCount = () => {
    return <div
        className={'h-full xl:py-[32px] xl:px-[40px] pl-4 pt-6 bg-[linear-gradient(121deg,rgba(186,255,16,0.1)_0%,rgba(255,37,243,0.09)_100%)] rounded-[14px] cursor-pointer  bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)]'}>
        <div className={'text-[24px] xl:text-[64px] h-[24px] xl:h-[64px] flex items-center text-foreground'}>6864</div>
        <div className={'text-[16px] h-[16px] flex items-center my-[10px] text-foreground'}>总访问量</div>
    </div>
}
const HomeDataCardDate = () => {
    return <div
        className={'h-full xl:py-[32px] xl:px-[40px] pl-4 pt-6 bg-[linear-gradient(121deg,rgba(255,57,244,0.1)_0%,rgba(45,86,255,0.1)_100%)] rounded-[14px] cursor-pointer  bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)]'}>
        <div className={'text-[24px] xl:text-[64px] h-[24px] xl:h-[64px] flex items-center text-foreground'}>679</div>
        <div className={'text-[16px] h-[16px] flex items-center my-[10px] text-foreground'}>今日访问</div>
    </div>
}
const HomeDataSwiper = () => {
    return <div
        className={'w-full h-full'}>
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
                        className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(90deg,var(--background),rgba(255,255,255,0))]'}>
                        <div className={'w-[100%] flex flex-col p-[40px] h-full xl:w-[470px]'}>
                            <div className={'text-[32px] line-[1.34]'}>ISQQW</div>
                            <div
                                className={'text-[16px] line-[1.5] pt-[16px]'}>Echarts示例最佳网站、这里有你想象不到的效果图
                            </div>
                            <div className={'pt-[16px] text-[16px] text-foreground opacity-60'}>
                                ECharts是一款强大的数据可视化工具，提供丰富的图表类型和交互体验。我们的社区是ECharts用户交流、学习和分享的平台，您可以在这里：无论您是初学者还是专业人士，这里都是您学习和成长的最佳选择！欢迎加入，共同推动数据可视化的发展。
                            </div>
                            <a target={'_blank'} href={'https://www.isqqw.com/'}
                               className={'mt-auto w-[122px] h-[48px] rounded-[30px] bg-foreground text-background flex justify-center items-center text-[14px]'}>官方网址</a>
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
                        className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(90deg,var(--background),rgba(255,255,255,0))]'}>
                        <div className={'w-[100%] flex flex-col p-[40px] h-full xl:w-[470px]'}>
                            <div className={'text-[32px] line-[1.34]'}>sa-blog</div>
                            <div
                                className={'text-[16px] line-[1.5] pt-[16px]'}>NestJs服务端博客网站
                            </div>
                            <div className={'pt-[16px] text-[16px] text-foreground opacity-60'}>
                                用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix
                                UI、Aceternity UI、Vite、TypeScript、Socket.Io
                            </div>
                            <div className={'flex mt-auto'}>
                                <a target={'_blank'} href={'http://47.93.248.11/home/'}
                                   className={'w-[122px] h-[48px] rounded-[30px] bg-foreground text-background flex justify-center items-center text-[14px]'}>瞧一瞧</a>
                                <a target={'_blank'} href={'https://gitee.com/yin-chunyang/blog-ui'}
                                   className={'w-[100px] opacity-60 mx-[10px] h-[48px] rounded-[30px] bg-foreground text-background flex justify-center items-center text-[14px]'}>
                                    前端
                                </a>
                                <a target={'_blank'} href={'https://gitee.com/yin-chunyang/blog-service'}
                                   className={'w-[100px] opacity-60 h-[48px] rounded-[30px] bg-foreground text-background flex justify-center items-center text-[14px]'}>
                                    后端
                                </a>
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
}
export const HomeData = () => {
    return <div className={cn('max-w-[100rem] mx-auto py-10 px-2 md:px-8 mt-4')}>
        <PartTitle title={'一些"小破站"'} description={'想捞一波,因站长心太善没了下文'}></PartTitle>
        <div className={'w-full flex flex-col-reverse xl:flex-row mt-6'}>
            <div className={'xl:min-w-[320px] flex justify-between xl:flex-col md:flex-row xl:w-[320px] w-full mt-[20px] xl:mt-0'}>
                <div className={'w-full h-[100px] xl:h-[190px]'}>
                    <HomeDataCardCount></HomeDataCardCount>
                </div>
                <div className={'w-full h-[100px] xl:h-[190px] ml-[20px] xl:ml-0'}>
                    <HomeDataCardDate></HomeDataCardDate>
                </div>
            </div>
            <div className={'h-[400px] xl:flex-1 xl:w-auto w-full xl:ml-[20px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
                <HomeDataSwiper></HomeDataSwiper>
            </div>
        </div>
    </div>
}