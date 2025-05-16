'use client';

import React, { useRef, useEffect, useState } from 'react';
import style from './style.module.css';

/**
 * VerticalToHorizontalScroll
 *
 * 桌面端将鼠标垂直滚动映射到横向，移动端保留原生横向滑动，并隐藏滚动条。
 *
 * Props:
 * - children: React.ReactNode  要水平滚动的内容
 * - speed?: number  滚动速度倍数，默认 1
 */
export default function VerticalToHorizontalScroll({
                                                       children,
                                                       speed = 1,
                                                   }: {
    children: React.ReactNode;
    speed?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isTouch, setIsTouch] = useState(false);

    // 检测移动端
    useEffect(() => {
        setIsTouch(
            typeof window !== 'undefined' &&
            ('ontouchstart' in window || navigator.maxTouchPoints > 0)
        );
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 基础样式：隐藏纵向滚动，始终可横向滚动
        container.style.overflowX = 'auto';
        container.style.overflowY = 'hidden';
        container.style.whiteSpace = 'nowrap';

        // 隐藏 scrollbar
        container.classList.add(style['hide-scrollbar']);

        // 桌面端把滚轮映射到横向
        if (!isTouch) {
            const onWheel = (e: WheelEvent) => {
                e.preventDefault();
                container.scrollLeft += e.deltaY * speed;
            };
            container.addEventListener('wheel', onWheel, { passive: false });
            return () => {
                container.removeEventListener('wheel', onWheel);
            };
        }
    }, [isTouch, speed]);

    return (
        <div ref={containerRef} className={style['scroll-container']}>
            <div className={style['scroll-content']}>{children}</div>
        </div>
    );
}
