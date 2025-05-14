'use client';

import {Signature} from "@/components/project/signature/signature";
import {ThemeSwitch} from "@/components/project/theme-switch/theme-switch";
import {HeaderMobileMenu} from './header-mobile-menu';
import {cn} from "@/lib/utils";
import style from './style.module.css';
import {blogConfig} from '@/blog.config'
import {usePathname, useRouter} from "next/navigation";

const HeaderLogo = () => {
    return <>
        <div className='w-[300px]'>
            <Signature></Signature>
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
    return <>
        <div className='w-full h-[64px] flex justify-center items-center fixed z-[10] pl-[32px] pr-[32px] box-border'>
            <HeaderLogo></HeaderLogo>
            <HeaderNavigate></HeaderNavigate>
            <HeaderScreen></HeaderScreen>
            <HeaderMobileMenu></HeaderMobileMenu>
        </div>
        <div className={cn('w-full h-[64] fixed z-[9] pointer-events-none', style['header-background'])}></div>
    </>
}