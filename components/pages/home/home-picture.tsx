'use client';

import {PartTitle} from "@/components/project/part-title/part-title";
import {Container} from "@/components/project/container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import Image from "next/image";
import {PictureType} from "@/type/picture";
import {useState} from 'react';
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from "next/navigation";

interface PictureSwiperItemContentOptionsType extends PictureType {
    setStates: (arg0: PictureType) => void;
    active: string;
}

const PictureSwiperItemContentOptions = (props: PictureSwiperItemContentOptionsType) => {
    return <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
            clickable: true,
        }}>
        {
            props.children && props.children.map((item, index) => {
                return <SwiperSlide key={item.url + index} className={'!w-[calc(33.33%-14px)]'}>
                    <div className={cn('h-[100px] relative bg-[rgba(0,0,0,.65)] transition-[all_0.3s_linear]')}
                         onClick={() => props.setStates(item)}>
                        <Image
                            className={cn(item.url === props.active ? 'opacity-100' : 'opacity-50', 'transition-[opacity_0.3s_linear]')}
                            fill={true}
                            objectFit={'cover'}
                            src={item.url} alt=''></Image>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
}

const PictureSwiperItemContent = (props: PictureType) => {
    const [current, setCurrent] = useState<PictureType>(props)

    const handleSelect = (next: PictureType) => {
        setCurrent(next)
    }

    return (
        <div className="w-full h-full relative overflow-hidden">
            {/* 遮罩层和文字信息 */}
            <div
                className="absolute inset-0 z-20 bg-[linear-gradient(-125deg,rgba(255,255,255,.8),rgba(255,255,255,0))] dark:bg-[linear-gradient(-125deg,rgba(0,0,0,.8),rgba(0,0,0,0))] flex flex-col-reverse xl:flex-row">
                <div className="flex-1 flex p-[40px]">
                    <div className="w-full xl:w-[50%] mt-auto pointer-events-auto">
                        <PictureSwiperItemContentOptions
                            {...props}
                            active={current.url}
                            setStates={handleSelect}
                        />
                    </div>
                </div>
                <div className="w-full xl:w-[470px] flex flex-col p-[40px] ml-auto">
                    <h2 className="text-[32px] leading-[1.34]">{current.name}</h2>
                    <p className="text-[16px] leading-[1.5] pt-[16px]">{current.tip}</p>
                    <p className="pt-[16px] text-[16px] text-foreground opacity-60 line-clamp-3">
                        {current.describe}
                    </p>
                </div>
            </div>

            {/* 进出场动画图片区 */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={current.url}
                    className="absolute inset-0"
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -100, opacity: 0}}
                    transition={{duration: 0.5}}
                >
                    <Image
                        fill
                        objectFit="cover"
                        src={current.url}
                        alt=""
                        priority
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
const PictureSwiper = () => {
    const [list, setList] = useState<PictureType[]>([
        {
            name: 'ISQQW',
            tip: '是简简单单的欣赏',
            describe: '哇卡把卡哇卡吧',
            date: new Date(),
            url: '/images/yy01.jpg',
            children: [
                {
                    name: 'ISQQW-son1',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/yy01.jpg',
                },
                {
                    name: 'ISQQW-son2',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/yy02.jpg',
                },
                {
                    name: 'ISQQW-son3',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/34986_light.png',
                },
                {
                    name: 'ISQQW-son4',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/gd.jpg',
                }
            ]
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
    const router = useRouter();
    const goPicture = () => {
        router.push('/picture');
    }
    return <Container>
        <PartTitle title={'一些"小藏品"'} description={'信我都是在群里收藏的，我想你们知道我是个收藏仔...'}></PartTitle>
        <div className={'w-full flex mt-3 xl:mt-6'}>
            <div
                className={'w-full h-[768px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
                <PictureSwiper></PictureSwiper>
            </div>
        </div>
        <div className={'flex justify-center mt-[20px]'}>
            <div onClick={goPicture}
                 className={'cursor-pointer opacity-55 w-[120px] h-[36px] flex justify-center items-center text-foreground border-[1px] border-foreground rounded-[36px] text-[14px]'}>查看更多
            </div>
        </div>
    </Container>
}