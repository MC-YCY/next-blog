'use client';

import {MenuButtonSpan} from "@/components/project/menu-button/menu-button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {ListSelect} from '@/components/project/list-select/list-select'
import {useState} from "react";
import {blogConfig} from '@/blog.config'
import {usePathname, useRouter} from 'next/navigation'

export const HeaderMobileMenu = () => {
    const pathname = usePathname()
    const router = useRouter();

    const [val, setVal] = useState(pathname);
    return <div className={'flex lg:hidden pl-[14px] justify-center items-center'}>
        <Drawer>
            <DrawerTrigger>
                <MenuButtonSpan className={'inline-block'}></MenuButtonSpan>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Hi，将在这里展示导航内容</DrawerTitle>
                    <DrawerDescription>可以点击它们切换内容</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>

                        <ListSelect
                            list={blogConfig.routes}
                            defaultValue={val}
                            onChange={(v) => {
                                setVal(v);
                                router.push(v);
                            }}
                        ></ListSelect>

                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    </div>
}