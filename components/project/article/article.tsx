'use client';

import Image from "next/image";
import {ArticleType} from "@/type/article";

export const Article = (props:ArticleType) =>{
    return <div className={'w-full pt-[28px]'}>
        <div className={'w-full p-[24px] shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] border-[1px] border-[rgba(255,255,255,.15)]'}>
            <div className={'h-[70px] w-full relative'}>
                <div className={'h-[120px] absolute bottom-0 w-full flex'}>
                    <div className={'w-[160px] min-w-[160px] h-[120px] relative rounded-[6px] overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,.5)]'}>
                        <Image
                            fill={true}
                            objectFit={'cover'}
                            src={props.banner} alt=''></Image>
                    </div>
                    <div className={'ml-4 flex flex-col justify-center pt-[26px] cursor-pointer flex-1'}>
                        <div className={'font-bold text-[20px] text-foreground flex-1 max-h-[20px] flex leading-[20px]'}>
                            <div className={'flex-1 w-0 text-nowrap truncate'}>
                                {props.title}
                            </div>
                        </div>
                        <div className={'mt-2 text-[14px] opacity-55'}>{props.date}</div>
                    </div>
                </div>
            </div>
            <div className={'line-clamp-2 text-foreground text-[14px] leading-[22px] my-4 opacity-65 cursor-pointer'}>
                {props.describe}
            </div>
            <div className={'flex'}>
                <span className={'text-[14px] text-foreground opacity-75 cursor-pointer'}>{props.tags}</span>
            </div>
        </div>
    </div>
}