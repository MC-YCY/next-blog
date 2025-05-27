'use client';

import {
    HomeTextSvgIcon,
    ArticleTextSvgIcon,
    PictureTextSvgIcon,
    DiaryTextSvgIcon,
    AboutTextSvgIcon
} from '@/components/project/svg-icons/text'

export const blogConfig = {
    routes: [
        {
            name: "首页",
            path: "/",
            icon: HomeTextSvgIcon,
        },
        {
            name: "文章",
            path: "/article",
            icon: ArticleTextSvgIcon,
        },
        {
            name: "随记",
            path: "/diary",
            icon: DiaryTextSvgIcon,
        },
        {
            name: "图库",
            path: "/picture",
            icon: PictureTextSvgIcon,
        },
        {
            name: "关于",
            path: "/about",
            icon: AboutTextSvgIcon,
        }
    ]
}