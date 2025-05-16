'use client';

import React, {JSX, useEffect, useState} from "react";
import style from './style.module.css';
import {cn} from '@/lib/utils'

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
        onTabChange && onTabChange(value);
    };

    return (<div className="flex gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => handleClick(tab.value)}
                    className={cn('text-sm focus:outline-none transition h-[32px] w-[100px] flex items-center justify-center border border-foreground rounded-2xl',
                        (tab.value === activeValue
                            ? 'bg-foreground text-background'
                            : ''))}>
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export const PartTitleRectAction = ({
                                        tabs,
                                        tabWidth = 130,
                                        tabHeight = 28,
                                        gap = 2,
                                        defaultValue,
                                        onTabChange,
                                    }: {
    tabs: { label: React.ReactNode; value: string }[];
    tabWidth?: number;
    tabHeight?: number;
    gap?: number;
    defaultValue?: string;
    onTabChange?: (value: string) => void;
}) => {
    const initialIndex = Math.max(
        0,
        tabs.findIndex((t) => t.value === defaultValue)
    );
    const [activeIndex, setActiveIndex] = useState<number>(
        initialIndex >= 0 ? initialIndex : 0
    );

    const handleClick = (index: number) => {
        setActiveIndex(index);
        onTabChange?.(tabs[index].value);
    };

    return (
        <div className={style['tab-container']}>
            {tabs.map((tab, idx) => (
                <button
                    key={tab.value}
                    type="button"
                    className={cn(style['tab-label'], {
                        [style['tab-label--active']]: idx === activeIndex,
                    })}
                    style={{
                        width: `${tabWidth}px`,
                        height: `${tabHeight}px`,
                        marginRight: idx < tabs.length - 1 ? `${gap}px` : '0',
                    }}
                    onClick={() => handleClick(idx)}
                >
                    {tab.label}
                </button>
            ))}

            <div
                className={style['indicator']}
                style={{
                    width: `${tabWidth}px`,
                    height: `${tabHeight}px`,
                    transform: `translateX(${activeIndex * (tabWidth + gap)}px)`,
                }}
            />
        </div>
    );
};
