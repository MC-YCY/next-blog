'use client';

import {PartTitle, PartTitleAction} from "@/components/project/part-title/part-title";
import VerticalToHorizontalScroll
    from "@/components/project/vertical-to-horizontal-scroll/vertical-to-horizontal-scroll";
import {ProjectCard} from "@/components/project/project-card";

export const HomeCode = () => {
    const tabs = [
        {label: '全部', value: 'all'},
        {label: 'Vue', value: 'vue'},
        {label: 'React', value: 'react'},
        {label: 'Echarts', value: 'echarts'},
        {label: 'JavaScript', value: 'js'},
    ]
    return <div className={'max-w-[100rem] mx-auto py-10 px-2 md:px-8'}>
        <PartTitle title={'一些"小挂件"'} description={'重复造的轮子罢了，知其然不知其所以然...'} action={
            <div className={'max-w-[100%] lg:max-w-[332px] overflow-x-hidden'}>
                <VerticalToHorizontalScroll speed={0.2}>
                    <PartTitleAction tabs={tabs}></PartTitleAction>
                </VerticalToHorizontalScroll>
            </div>
        }></PartTitle>
        <div className="mt-6 gap-4 block md:grid md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986_dark.png'}></ProjectCard>
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986_light.png'}></ProjectCard>
            <ProjectCard project={'project name'} date={'2025/5/16'} tip={'组件'}
                         banner={'/images/34986.png'}></ProjectCard>
        </div>
    </div>
}