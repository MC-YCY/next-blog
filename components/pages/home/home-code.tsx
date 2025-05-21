'use client';

import {PartTitle, PartTitleAction} from "@/components/project/part-title/part-title";
import {ProjectCard} from "@/components/project/project-card";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Container} from "@/components/project/container";
const list = [
    {
        name:'react-calendar',
        date:'2024/08/14',
        tip:'组件/日历',
        banner:'/images/code-banner/a.png',
        git:'https://gitee.com/yin-chunyang/react-calendar',
        preview:'https://juejin.cn/post/7403426280940912640'
    },
    {
        name:'online-editing-echarts',
        date:'2024/02/05',
        tip:'组件/echarts编辑器',
        banner:'/images/code-banner/b.png',
        git:'https://gitee.com/yin-chunyang/online-editing-echarts',
        preview:'https://juejin.cn/post/7447407817684647951'
    },
    {
        name:'mars3d-marker',
        date:'2025/05/02',
        tip:'功能/地图标注、图片标注',
        banner:'/images/code-banner/c.png',
        git:'https://gitee.com/yin-chunyang/mars3d-marker',
        preview:''
    },
    {
        name:'antvx6条形码信息',
        date:'2024/09/02',
        tip:'功能/组件调整、生成png',
        banner:'/images/code-banner/d.png',
        git:'https://gitee.com/yin-chunyang/vue3-antvx6-null-edge-designer',
        preview:'https://juejin.cn/post/7418123700166361123'
    }
]
export const HomeCode = () => {
    const tabs = [
        {label: '全部', value: 'all'},
        {label: 'Vue', value: 'vue'},
        {label: 'React', value: 'react'},
        {label: 'Echarts', value: 'echarts'},
        {label: 'JavaScript', value: 'js'},
    ]
    return <Container>
        <PartTitle data-tip={'tip:滑动选项、卡片查看更多'} title={'一些"小挂件"'} description={'重复造的轮子罢了，知其然不知其所以然...'} action={
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
                {
                    list.map((item)=>{
                        return <SwiperSlide className={'w-[100%]! md:!w-[calc(50%-10px)] xl:!w-[calc(33.33%-14px)]'}>
                            <ProjectCard project={item.name} date={item.date} tip={item.tip}
                                         banner={item.banner} code={item.git} url={item.preview}></ProjectCard>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    </Container>
}