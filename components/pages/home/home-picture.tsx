'use client';

import {PartTitle} from "@/components/project/part-title/part-title";
import {Container} from "@/components/project/container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import Image from "next/image";

const PictureSwiperItemContent = () => {
    return <div className={'w-full h-full relative'}>
        <div
            className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(-125deg,rgba(255,255,255,.8),rgba(255,255,255,0))] dark:bg-[linear-gradient(-125deg,rgba(0,0,0,.8),rgba(0,0,0,0))] flex'}>
            <div className={'w-[100%] flex flex-col p-[40px] h-full xl:w-[470px] ml-auto'}>
                <div className={'text-[32px] line-[1.34]'}>ISQQW</div>
                <div
                    className={'text-[16px] line-[1.5] pt-[16px]'}>Echarts示例最佳网站、这里有你想象不到的效果图
                </div>
                <div className={'pt-[16px] text-[16px] text-foreground opacity-60 line-clamp-3'}>
                    ECharts是一款强大的数据可视化工具，提供丰富的图表类型和交互体验。我们的社区是ECharts用户交流、学习和分享的平台，您可以在这里：无论您是初学者还是专业人士，这里都是您学习和成长的最佳选择！欢迎加入，共同推动数据可视化的发展。
                </div>
            </div>
        </div>
        <Image
            fill={true}
            objectFit={'cover'}
            src='/images/yy01.jpg' alt=''></Image>
    </div>
}

const PictureSwiper = () => {
    return <div
        className={'w-full h-full'}>
        <Swiper
            className={'w-full h-full'}
            scrollbar={{
                hide: false,
                horizontalClass: 'custom-swiper-scrollbar',
            }}
            modules={[Scrollbar]}>
            <SwiperSlide>
                <PictureSwiperItemContent></PictureSwiperItemContent>
            </SwiperSlide>
            <SwiperSlide>
                <PictureSwiperItemContent></PictureSwiperItemContent>
            </SwiperSlide>
            <SwiperSlide>
                <PictureSwiperItemContent></PictureSwiperItemContent>
            </SwiperSlide>
        </Swiper>
    </div>
}

export const HomePicture = () => {
    return <Container>
        <PartTitle title={'一些"小藏品"'} description={'信我都是在群里收藏的，我想你们知道我是个收藏仔...'}></PartTitle>
        <div className={'w-full flex mt-3 xl:mt-6'}>
            <div
                className={'w-full h-[768px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
                <PictureSwiper></PictureSwiper>
            </div>
        </div>
    </Container>
}