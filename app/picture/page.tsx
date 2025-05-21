'use client';
import {Container} from "@/components/project/container";
import {PartTitle} from "@/components/project/part-title/part-title";
import {PicturePreview, PictureSwiperItemContent} from "@/components/pages/picture/picture";
import {useState} from "react";
import {PictureType} from "@/type/picture";

const PicturePageItem = ({item, index}: { item: PictureType, index: number }) => {
    const [previewState, setPreviewState] = useState<PictureType>({
        name: '',
        tip: '',
        describe: '',
        date: '',
        url: '',
    });
    const setStates = (item: PictureType, index: number, state: PictureType) => {
        setPreviewState(state)
    }
    return <div>
        <PartTitle className={'pt-6 pb-3 px-2'} titleclassname={'text-[18px] opacity-80'} title={item.name}
                   action={<PicturePreview {...previewState}></PicturePreview>}></PartTitle>
        <div
            className={'w-full h-[76vh] max-h-[768px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
            <PictureSwiperItemContent activeIndex={0} slideIndex={0}
                                      setStates={(state) => setStates(item, index, state)} {...item}></PictureSwiperItemContent>
        </div>
    </div>
}

const PicturePage = () => {
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
    return <div className={'pt-[64px]'}>
        <Container>
            <PartTitle title={'一些"小藏品"'}
                       description={'信我都是在群里收藏的，我想你们知道我是个收藏仔...'}></PartTitle>
            {
                list.map((item, index) => {
                    return <PicturePageItem key={item.url + index} item={item} index={index}></PicturePageItem>
                })
            }
        </Container>
    </div>
}
export default PicturePage