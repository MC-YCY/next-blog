'use client';

import {SignatureGroup} from "@/components/project/signature/signature";
import {ThemeSwitch} from "@/components/project/theme-switch/theme-switch";
import {HeaderMobileMenu} from './header-mobile-menu';
import {cn} from "@/lib/utils";
import style from './style.module.css';
import {blogConfig} from '@/blog.config'
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import {throttle} from 'lodash-es';

const HeaderLogo = () => {
    return <>
        <div className='w-[300px]'>
            <div className='w-[150px]'>
                <SignatureGroup></SignatureGroup>
            </div>
        </div>
    </>
}
const HeaderNavigate = () => {
    const pathname = usePathname()
    const router = useRouter();
    const goRoute = (route: { path: string }) => {
        router.push(route.path);
    }
    return <div className='hidden lg:block flex-1'>
        <div
            className={cn('flex justify-center align-center text-sm text-foreground gap-[48px] cursor-pointer', style.navbar)}>
            {
                blogConfig.routes.map((route) => {
                    let className = '';
                    if (route.path === pathname) {
                        className = cn('font-bold', style.active);
                    }
                    return <div key={route.path} className={className} onClick={() => goRoute(route)}>{route.name}</div>
                })
            }
        </div>
    </div>
}
const HeaderScreen = () => {
    return <>
        <div className='w-[300px] justify-end flex'>
            <ThemeSwitch></ThemeSwitch>
        </div>
    </>
}
export const Header = () => {
    const [opacityClassName, setOpacityClassName] = useState('opacity-6')
    const [translateYClassName, setTranslateYClassName] = useState('translate-y-[0%]');
    const lastScrollY = useRef(0);  // 新增 ref 存储上次滚动位置

    useEffect(() => {
        const handleScroll = throttle(() => {
            const currentScrollY = document.documentElement.scrollTop;

            // 判断滚动方向
            const isScrollingDown = currentScrollY > lastScrollY.current;
            lastScrollY.current = currentScrollY;
            console.log(isScrollingDown)
            // 组合判断条件：滚动超过100px 且 向下滚动
            const shouldOpaque = currentScrollY > 100;
            if (shouldOpaque && currentScrollY > window.innerHeight) {
                if (isScrollingDown) {
                    setTranslateYClassName('translate-y-[-100%]');
                } else {
                    setTranslateYClassName('translate-y-[0%]');
                }
            } else {
                setTranslateYClassName('translate-y-[0%]');
            }
            setOpacityClassName(shouldOpaque ? 'opacity-86' : 'opacity-6');
        }, 100); // 100ms 节流间隔

        window.addEventListener('scroll', handleScroll);

        // 清理函数
        return () => {
            window.removeEventListener('scroll', handleScroll);
            handleScroll.cancel(); // 重要！取消 lodash 的 throttle
        };
    }, []);
    return <>
        <div
            className={cn('w-full h-[64px] flex justify-center items-center fixed z-[30] pl-[32px] pr-[32px] box-border', translateYClassName, style['header'])}>
            <HeaderLogo></HeaderLogo>
            <HeaderNavigate></HeaderNavigate>
            <HeaderScreen></HeaderScreen>
            <HeaderMobileMenu></HeaderMobileMenu>
        </div>
        <div
            className={cn('w-full h-[64] fixed z-[20] pointer-events-none', opacityClassName, translateYClassName, style['header-background'])}></div>
    </>
}