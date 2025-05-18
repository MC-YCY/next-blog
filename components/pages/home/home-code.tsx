'use client';

import {PartTitle, PartTitleAction} from "@/components/project/part-title/part-title";
import {ProjectCard} from "@/components/project/project-card";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Container} from "@/components/project/container";

export const HomeCode = () => {
    const tabs = [
        {label: '全部', value: 'all'},
        {label: 'Vue', value: 'vue'},
        {label: 'React', value: 'react'},
        {label: 'Echarts', value: 'echarts'},
        {label: 'JavaScript', value: 'js'},
    ]
    return <Container>
        <PartTitle title={'一些"小挂件"'} description={'重复造的轮子罢了，知其然不知其所以然...'} action={
            <div className={'max-w-[100%] lg:max-w-[340px] overflow-x-hidden'}>
                <PartTitleAction tabs={tabs}></PartTitleAction>
            </div>
        }></PartTitle>
        <div className={'mt-3 xl:mt-6'}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide className={'w-[100%]! md:!w-[calc(50%-10px)] xl:!w-[calc(33.33%-14px)]'}>
                    <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                                 banner={'/images/34986_dark.png'}></ProjectCard>
                </SwiperSlide>
                <SwiperSlide className={'w-[100%]! md:!w-[calc(50%-10px)] xl:!w-[calc(33.33%-14px)]'}>
                    <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                                 banner={'/images/34986_light.png'}></ProjectCard>
                </SwiperSlide>
                <SwiperSlide className={'w-[100%]! md:!w-[calc(50%-10px)] xl:!w-[calc(33.33%-14px)]'}>
                    <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                                 banner={'/images/34986.png'}></ProjectCard>
                </SwiperSlide>
                <SwiperSlide className={'w-[100%]! md:!w-[calc(50%-10px)] xl:!w-[calc(33.33%-14px)]'}>
                    <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                                 banner={'/images/34986.png'}></ProjectCard>
                </SwiperSlide>
            </Swiper>
        </div>
    </Container>
}