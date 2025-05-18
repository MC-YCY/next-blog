'use client';
import {Container} from '@/components/project/container';
import {PartTitle} from "@/components/project/part-title/part-title";
import {Calendar} from "@/components/project/calendar/calendar";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {
    IconSquareRoundedChevronLeftFilled,
    IconSquareRoundedChevronRightFilled,
    IconSunFilled
} from '@tabler/icons-react'
import {Diary} from "@/components/project/diary/diary";

export const HomeDiary = () => {
    const [open, setOpen] = useState(true);
    const [date, setDate] = useState(new Date());
    const onPrevMonth = () => {
        const newDate = new Date(date);
        if (open) {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setDate(newDate.getDate() - 7);
        }
        setDate(newDate);
    }
    const onNextMonth = () => {
        const newDate = new Date(date);
        if (open) {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setDate(newDate);
    }
    const onToday = () => {
        setDate(new Date());
    }
    const clickCalendarItem = (d: { day: number, month: number, year: number }) => {
        setDate(new Date(d.year, d.month, d.day));
    }
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 1280);
        };

        // 立即执行一次以设置初始状态
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <Container>
        <PartTitle title={'灵光一现一些想法'} description={'落魄前端，加班前的幻想...'}></PartTitle>
        <div className={'w-full mt-3 xl:mt-6 block xl:flex'}>
            <div className={'w-full xl:w-[450px]'}>
                <div
                    className={'pt-4 pb-2 px-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px]'}>
                    <div className={'flex justify-between h-[30px] items-center pb-4 pt-2 box-border px-6'}>
                        <IconSquareRoundedChevronLeftFilled onClick={onPrevMonth} width={24} height={24}
                                                            className={'cursor-pointer'}></IconSquareRoundedChevronLeftFilled>
                        <div className={'font-bold text-[18px] cursor-pointer select-none'}
                             data-tip={'tip:点击今天'} onClick={onToday}>{dayjs(date).format('YYYY年MM月DD日')}</div>
                        <IconSquareRoundedChevronRightFilled onClick={onNextMonth} width={24} height={24}
                                                             className={'cursor-pointer'}></IconSquareRoundedChevronRightFilled>
                    </div>
                    <Calendar open={open} date={date} firstDayOfWeek={1} onClick={clickCalendarItem}></Calendar>
                </div>
                <div className={'text-[14px] opacity-80 px-3 pt-4'}>
                    <a href="https://gitee.com/yin-chunyang/react-calendar" className={'underline'} target={'_blank'}>
                        react日历组件,一个可以上下收起展开的日历,收起展示所在日期一周的信息,展开展示月的信息.
                    </a>
                </div>
            </div>
            <div className={'flex-1 ml-0 xl:ml-[40px] mt-4 xl:mt-0'}>
                <Diary
                    className1={'min-h-[500px]'}
                    className2={'min-h-[500px]'}
                    className3={'min-h-[400px]'}
                    title={'春秋半夏'}
                    date={dayjs(date).format('YYYY年MM月DD日')}
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
            </div>
        </div>
    </Container>
}