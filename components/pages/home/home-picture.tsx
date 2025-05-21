'use client';

import {PartTitle} from "@/components/project/part-title/part-title";
import {Container} from "@/components/project/container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import {PictureType} from "@/type/picture";
import {useState} from 'react';
import {useRouter} from "next/navigation";
import {PicturePreview, PictureSwiperItemContent} from "@/components/pages/picture/picture";

const PictureSwiper = ({setPreview}: { setPreview: (arg0: PictureType) => void }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const onSlideChange = (swiper: { activeIndex: number }) => {
        setActiveIndex(swiper.activeIndex);
    }
    const setStates = (state: PictureType) => {
        setPreview(state)
    }
    const [list] = useState<PictureType[]>([
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
            children: [
                {
                    name: 'ISQQW-son1',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/34986_light.png',
                },
                {
                    name: 'ISQQW-son2',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/yy02.jpg',
                },
                {
                    name: 'ISQQW-son4',
                    tip: '是简简单单的欣赏',
                    describe: '哇卡把卡哇卡吧',
                    date: new Date(),
                    url: '/images/gd.jpg',
                }
            ]
        }
    ]);
    return <div
        className={'w-full h-full'}>
        <Swiper
            onSlideChange={(swiper) => onSlideChange(swiper)}
            className={'w-full h-full'}
            scrollbar={{
                hide: false,
                horizontalClass: 'custom-swiper-scrollbar',
            }}
            modules={[Scrollbar]}>
            {
                list.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <PictureSwiperItemContent activeIndex={activeIndex}
                                                  slideIndex={index}
                                                  setStates={(state) => setStates(state)} {...item}></PictureSwiperItemContent>
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
    const [previewState, setPreviewState] = useState<PictureType>({
        name: '',
        tip: '',
        describe: '',
        date: '',
        url: '',
    });
    return <Container>
        <PartTitle title={'一些"小藏品"'} description={'信我都是在群里收藏的，我想你们知道我是个收藏仔...'} action={
            <div className={'w-[36px]'}>
                <PicturePreview {...previewState}></PicturePreview>
            </div>
        }></PartTitle>
        <div className={'w-full flex mt-3 xl:mt-6 select-none'}>
            <div
                className={'w-full h-[76vh] max-h-[768px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
                <PictureSwiper setPreview={(state) => setPreviewState(state)}></PictureSwiper>
            </div>
        </div>
        <div className={'flex justify-center mt-[20px]'}>
            <div onClick={goPicture}
                 className={'cursor-pointer opacity-55 w-[120px] h-[36px] flex justify-center items-center text-foreground border-[1px] border-foreground rounded-[36px] text-[14px]'}>查看更多
            </div>
        </div>
    </Container>
}