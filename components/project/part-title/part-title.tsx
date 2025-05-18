'use client';

import React, {JSX, useEffect, useState} from "react";
import {cn} from '@/lib/utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
interface PartTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    action?: JSX.Element;
}

export const PartTitle = ({ title, description, action, ...props }: PartTitleProps) => {
    return (
        <div className="w-full items-center block lg:flex" {...props} title="">
            <div className="text-[32px] h-[32px] flex items-center text-nowrap">
                {title}
            </div>
            {description && (
                <div className="text-base opacity-70 text-[14px] h-[14px] flex items-center ml-2 my-2">
                    {description}
                </div>
            )}
            {action && <div className="flex ml-auto">{action}</div>}
        </div>
    );
};

export const PartTitleAction = ({
                                    tabs,
                                    defaultValue,
                                    onTabChange,
                                }: {
    tabs: { label: React.ReactNode; value: string }[];
    defaultValue?: string;
    onTabChange?: (newValue: string) => void;
}) => {
    const initial = defaultValue ?? tabs[0]?.value;
    const [activeValue, setActiveValue] = useState<string>(initial);

    useEffect(() => {
        if (defaultValue && defaultValue !== activeValue) {
            setActiveValue(defaultValue);
        }
    }, [defaultValue]);

    const handleClick = (value: string) => {
        setActiveValue(value);
        onTabChange?.(value);
    };

    return (
        <div className="w-full">
            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                freeMode={true}
                modules={[FreeMode]}
                className="!px-4" // 添加左右 padding
            >
                {tabs.map((tab) => (
                    <SwiperSlide key={tab.value} className="!w-auto">
                        <button
                            onClick={() => handleClick(tab.value)}
                            className={cn(
                                'text-sm focus:outline-none select-none transition h-[32px] px-4 flex items-center justify-center border border-foreground rounded-2xl whitespace-nowrap',
                                tab.value === activeValue
                                    ? 'bg-foreground text-background'
                                    : ''
                            )}
                        >
                            {tab.label}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};