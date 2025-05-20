'use client';

import {PartTitle, PartTitleAction} from "@/components/project/part-title/part-title";
import {Article} from "@/components/project/article/article";
import {Container} from "@/components/project/container";
import {useState} from "react";
import {ArticleType} from "@/type/article";
import {Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";
import {SpanButton} from "@/components/ui/button";

const ArticlePage = () =>{
    const [articleList, setArticleList] = useState<ArticleType[]>([
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        },
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        },
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        },
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        },
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        },
        {
            banner: '/images/34986_light.png',
            title: 'NestJs&React博客',
            date: '2025/3/14',
            describe: '用来尝试NestJs框架搭建的博客，前端用来尝试一种只提供逻辑的ui组件库，使用到了React、Tailwindcss、Radix UI、Aceternity UI、Vite、TypeScript、Socket.Io',
            tags: '项目/全栈博客'
        }
    ])
    const tabs = [
        {label: '全部', value: 'all'},
        {label: 'Vue', value: 'vue'},
        {label: 'React', value: 'react'},
        {label: 'Echarts', value: 'echarts'},
        {label: 'JavaScript', value: 'js'},
    ]
    const onLoad = () =>{
        let n = [...articleList];
        n.length = 3;
        setArticleList([...articleList,...n])
    }
    const [previewOpen, setPreviewOpen] = useState(false);
    const [current, setCurrent] = useState<ArticleType>({
        banner: '',
        title: '',
        date: '',
        describe: '',
        tags: '',
    });
    const clickItem = (state: ArticleType) => {
        setCurrent(state);
        setPreviewOpen(true);
    }
    return <div className={'pt-[64px]'}>
        <Container>
            <Drawer open={previewOpen} onClose={() => setPreviewOpen(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle></DrawerTitle>
                        <Article {...current}></Article>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <SpanButton onClick={() => setPreviewOpen(false)}>关闭</SpanButton>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <PartTitle title={'一些"小作文"'}
                       description={'天天看各种框架比较，看的是瑟瑟发抖...'} action={
                <div className={'max-w-[100%] lg:max-w-[340px] overflow-x-hidden'}>
                    <PartTitleAction tabs={tabs}></PartTitleAction>
                </div>
            }></PartTitle>
            <div className={'mt-3 xl:mt-6'}>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px_20px]">
                    {
                        articleList.map((article, index) => {
                            return <div key={'home-article' + index}>
                                <Article {...article} onClick={(state) => clickItem(state)}></Article>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={'flex justify-center mt-[20px]'}>
                <div onClick={onLoad} className={'cursor-pointer opacity-55 w-[120px] h-[36px] flex justify-center items-center text-foreground border-[1px] border-foreground rounded-[36px] text-[14px]'}>加载更多</div>
            </div>
        </Container>
    </div>
}

export default ArticlePage;