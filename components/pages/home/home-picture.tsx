'use client';

import {PartTitle} from "@/components/project/part-title/part-title";
import {Container} from "@/components/project/container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import Image from "next/image";
import {PictureType} from "@/type/picture";
import {useState} from 'react';

const PictureSwiperItemContent = (props: PictureType) => {
    return <div className={'w-full h-full relative'}>
        <div
            className={'h-full w-full absolute left-0 top-0 z-[2] bg-[linear-gradient(-125deg,rgba(255,255,255,.8),rgba(255,255,255,0))] dark:bg-[linear-gradient(-125deg,rgba(0,0,0,.8),rgba(0,0,0,0))] flex flex-col-reverse xl:flex-row'}>
            <div className={'flex-1 flex p-[40px]'}>
                <div className={'w-full xl:w-[50%] mt-auto'}>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide className={'!w-[calc(33.33%-14px)]'}>
                            <div className={'h-[100px] relative'}>
                                <Image
                                    fill={true}
                                    objectFit={'cover'}
                                    src={'/images/yy01.jpg'} alt=''></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={'!w-[calc(33.33%-14px)]'}>
                            <div className={'h-[100px] relative'}>
                                <Image
                                    fill={true}
                                    objectFit={'cover'}
                                    src={'/images/yy01.jpg'} alt=''></Image>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={'!w-[calc(33.33%-14px)]'}>
                            <div className={'h-[100px] relative'}>
                                <Image
                                    fill={true}
                                    objectFit={'cover'}
                                    src={'/images/yy01.jpg'} alt=''></Image>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={'w-[100%] flex flex-col p-[40px] h-full xl:w-[470px] ml-auto'}>
                <div className={'text-[32px] line-[1.34]'}>{props.name}</div>
                <div
                    className={'text-[16px] line-[1.5] pt-[16px]'}>{props.tip}
                </div>
                <div className={'pt-[16px] text-[16px] text-foreground opacity-60 line-clamp-3'}>
                    {props.describe}
                </div>
            </div>
        </div>
        <Image
            fill={true}
            objectFit={'cover'}
            src={props.url} alt=''></Image>
    </div>
}

const PictureSwiper = () => {
    const [list, setList] = useState<PictureType>([
        {
            name: 'ISQQW',
            tip: '是简简单单的欣赏',
            describe: '哇卡把卡哇卡吧',
            date: new Date(),
            url: '/images/yy01.jpg',
        },
        {
            name: 'ISQQW',
            tip: '是简简单单的欣赏',
            describe: '哇卡把卡哇卡吧',
            date: new Date(),
            url: '/images/yy02.jpg',
        },
        {
            name: 'ISQQW',
            tip: '是简简单单的欣赏',
            describe: '哇卡把卡哇卡吧',
            date: new Date(),
            url: '/images/34986_light.png',
        }
    ]);
    return <div
        className={'w-full h-full'}>
        <Swiper
            className={'w-full h-full'}
            scrollbar={{
                hide: false,
                horizontalClass: 'custom-swiper-scrollbar',
            }}
            modules={[Scrollbar]}>
            {
                list.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <PictureSwiperItemContent {...item}></PictureSwiperItemContent>
                    </SwiperSlide>
                })
            }
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