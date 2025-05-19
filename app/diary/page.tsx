'use client';

import {PartTitle} from "@/components/project/part-title/part-title";
import {Container} from "@/components/project/container";
import {
    IconSquareRoundedChevronLeftFilled,
    IconSquareRoundedChevronRightFilled,
    IconSunFilled
} from "@tabler/icons-react";
import dayjs from "dayjs";
import {Calendar} from "@/components/project/calendar/calendar";
import {Diary} from "@/components/project/diary/diary";
import {useEffect, useState, useRef} from "react";
import {SpanButton} from "@/components/ui/button";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {cn} from '@/lib/utils'
import {DiaryType} from "@/type/diary";

const WriteButton = ({date}: { date: Date }) => {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // 自动调整高度
    useEffect(() => {
        if (textareaRef.current) {
            // 先重置高度，再计算新的高度
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);
    return <Drawer>
        <DrawerTrigger>
            <SpanButton>写点什么...</SpanButton>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Hi，开始你的记录吧。</DrawerTitle>
                <div className={'mt-6'}>
                    <Diary
                        className1={'min-h-[300px]'}
                        className2={'min-h-[300px]'}
                        className3={'min-h-[300px]'}
                        title={'春秋半夏'}
                        date={dayjs(date).format('YYYY年MM月DD日')}
                        weather={<IconSunFilled width={24} height={24} color={'#ecca2f'}/>}
                        content={<textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            rows={1}
                            className={'resize-none w-full outline-none'}
                            placeholder={'写点什么呢...'}
                        />}></Diary>
                </div>
            </DrawerHeader>
            <DrawerFooter>
                <DrawerClose>
                    <SpanButton>确定</SpanButton>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}
const DateList = ({date, onClick}: { date: Date, onClick: (arg0: DiaryType) => void }) => {
    const [selected, setSelected] = useState<DiaryType['id']>();
    const [list, setList] = useState<DiaryType[]>([
        {
            id: '1',
            title: '春秋半夏',
            date: dayjs(date).format('YYYY年MM月DD日'),
            weather: <IconSunFilled width={24} height={24} color={'#ecca2f'}/>,
            content: '这天的风很平静...'
        },
        {
            id: '2',
            title: '春秋半夏',
            date: dayjs(date).format('YYYY年MM月DD日'),
            weather: <IconSunFilled width={24} height={24} color={'#ecca2f'}/>,
            content: '这天的风很平静...'
        },
        {
            id: '3',
            title: '春秋半夏',
            date: dayjs(date).format('YYYY年MM月DD日'),
            weather: <IconSunFilled width={24} height={24} color={'#ecca2f'}/>,
            content: '这天的风很平静...'
        }
    ]);
    useEffect(() => {
        onItemClick(list[0])
    }, [date]);
    const onItemClick = (item: DiaryType) => {
        setSelected(item.id);
        onClick(item);
    }
    return <>
        {
            list.map((item, index) => {
                let itemClassName = '';
                if (index >= 1) {
                    itemClassName += 'mt-6'
                }
                let selectedClassName = '';
                if (item.id === selected) {
                    selectedClassName += 'shadow-[0_0_4px_rgba(153,133,210,1)]! dark:shadow-[0_0_4px_rgba(13,224,252,.3)]!'
                }
                return <div key={item.id} className={cn('w-full select-none cursor-pointer', itemClassName)}
                            onClick={() => onItemClick(item)}>
                    <Diary
                        className1={cn('min-h-[40px] px-2! py-4!', selectedClassName)}
                        className2={cn('min-h-[40px]', selectedClassName)}
                        className3={'min-h-[40px]'}
                        title={item.title}
                        date={dayjs(item.date).format('YYYY年MM月DD日')}
                        weather={item.weather}
                        content={item.content}></Diary>
                </div>
            })
        }
        <div className={'flex justify-around mt-6 pb-[12px] w-full'}>
            <IconSquareRoundedChevronLeftFilled width={36} height={36}
                                                className={'cursor-pointer'}></IconSquareRoundedChevronLeftFilled>
            <IconSquareRoundedChevronRightFilled width={36} height={36}
                                                 className={'cursor-pointer'}></IconSquareRoundedChevronRightFilled>
        </div>
    </>
}

export default function () {
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
    const clickListItem = (item:DiaryType) => {
        console.log(item)
    }
    return <div className={'pt-[64px]'}>
        <Container>
            <PartTitle title={'灵光一现一些想法'} description={'落魄前端，加班前的幻想...'}
                       action={<WriteButton date={date}/>}></PartTitle>
            <div className={'w-full mt-3 xl:mt-6 block xl:flex'}>
                <div className={'w-full xl:w-[500px]'}>
                    <div
                        className={'pt-4 pb-2 px-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px]'}>
                        <div className={'flex justify-between h-[30px] items-center pb-4 pt-2 box-border px-6'}>
                            <IconSquareRoundedChevronLeftFilled onClick={onPrevMonth} width={24} height={24}
                                                                className={'cursor-pointer'}></IconSquareRoundedChevronLeftFilled>
                            <div className={'font-bold text-[18px] cursor-pointer select-none'}
                                 data-tip={'tip:点击今天'}
                                 onClick={onToday}>{dayjs(date).format('YYYY年MM月DD日')}</div>
                            <IconSquareRoundedChevronRightFilled onClick={onNextMonth} width={24} height={24}
                                                                 className={'cursor-pointer'}></IconSquareRoundedChevronRightFilled>
                        </div>
                        <Calendar cellHeight={60} open={open} date={date} firstDayOfWeek={1}
                                  onClick={clickCalendarItem}></Calendar>
                    </div>
                </div>
                <div className={'flex-1 ml-0 xl:ml-[40px] pt-6 xl:pt-0 pl-[8px]'}>
                    <DateList date={date} onClick={(item) => clickListItem(item)}></DateList>
                </div>
            </div>
            <div className={'pt-8 xl:pt-6 pl-[8px]'}>
                <Diary
                    className1={'min-h-[500px]'}
                    className2={'min-h-[500px]'}
                    className3={'min-h-[400px]'}
                    title={'春秋半夏'}
                    date={dayjs(date).format('YYYY年MM月DD日')}
                    weather={<IconSunFilled width={24} height={24} color={'#ecca2f'}/>}
                    content={<>
                        <p>React
                            交互式日历组件解析：手势操作与高度可定制的日期选择器，这个React日历组件融合了传统日期选择与现代交互设计，主要提供以下功能：</p>
                        <p className={'font-bold'}>动态日期渲染:</p>
                        <div className={'ml-4'}>
                            <li>鼠标拖拽展开/收起日历</li>
                            <li>智能滑动阈值判定（5px容差值）</li>
                            <li>平滑过渡动画效果</li>
                        </div>
                        <p className={'font-bold'}>多维度定制化:</p>
                        <div className={'ml-4'}>
                            <li>自定义周标题（customWeek）</li>
                            <li>日期单元格渲染（customDay）</li>
                            <li>动态高度配置（cellHeight）</li>
                        </div>
                        <p className={'font-bold'}>事件反馈机制:</p>
                        <div className={'ml-4'}>
                            <li>日期选择回调（onClick）</li>
                            <li>数据变化通知（onChange）</li>
                            <li>展开状态切换（onToggle）</li>
                        </div>
                    </>}></Diary>
            </div>
        </Container>
    </div>
}