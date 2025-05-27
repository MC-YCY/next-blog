'use client'

import { useEffect, useState } from 'react'
import { PartTitle } from '@/components/project/part-title/part-title'
import { Container } from '@/components/project/container'
import { Grid, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { DiaryWriteButton } from '@/components/pages/diary/diary-wrate-button'
import { useSession, signIn } from 'next-auth/react'
import { toast as Toast } from 'sonner'
import { MessageBoard } from '@/type/message-board'

export const HomeMessageBoard = () => {
    const [list, setList] = useState<MessageBoard[]>([])
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()

    // 1. 页面加载时拉取所有留言
    const fetchMessages = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/messages')
            if (!res.ok) throw new Error('获取留言失败')
            const { messages } = await res.json()
            setList(messages)
        } catch (err) {
            console.error(err)
            Toast.error('加载留言失败')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [])

    // 2. 提交新留言
    const onSubmit = async (value: string) => {
        const text = value.trim()
        if (!text) {
            Toast('Tip', {
                description: '未填写内容',
            })
            return;
        }

        if (!session) {
            Toast('Tip', {
                description: '未登录，请先登录',
                action: {
                    label: 'Login',
                    onClick: () => signIn('github'),
                },
            })
            return
        }

        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || '提交失败')
            }
            // 新插入的留言放到最前面
            setList(prev => [data.message, ...prev])
            Toast.success('留言发布成功')
        } catch (err) {
            console.error(err)
            Toast.error('留言发布失败')
        }
    }

    // 点击按钮前置校验
    const clickWrite = () => {
        if (!session) {
            Toast('Tip', {
                description: '未登录，请先登录',
                action: {
                    label: 'Login',
                    onClick: () => signIn('github'),
                },
            })
        }
    }

    return (
        <Container>
            <PartTitle
                title={'一些"美妙的语言"'}
                description={'**星###星！@#￥%……&'}
                action={
                    <div onClick={clickWrite}>
                        <div className={session ? '' : 'pointer-events-none'}>
                            <DiaryWriteButton
                                onSubmit={onSubmit}
                                username={session?.user?.name ?? ''}
                                date={new Date()}
                            />
                        </div>
                    </div>
                }
            />

            {loading && <p className="text-center py-4">加载中…</p>}

            <div className="w-full h-[500px] mt-3 xl:mt-6 select-none">
                {
                    list.length>0 && <Swiper
                        slidesPerView={3}
                        grid={{ rows: 2 }}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        scrollbar={{
                            hide: false,
                            horizontalClass: 'custom-swiper-scrollbar',
                        }}
                        modules={[Grid, Scrollbar]}
                        className="w-full h-full ml-auto mr-auto pb-5"
                    >
                        {list.map((item, idx) => (
                            <SwiperSlide
                                key={`msg-${idx}`}
                                className="bg-background border rounded-2xl px-4 py-4 box-border shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,.1)]"
                            >
                                <div className="w-full h-full flex flex-col">
                                    <div className="text-foreground line-clamp-5 opacity-85">
                                        {item.text}
                                    </div>
                                    <div className="mt-auto">
                                        <div className="flex items-center">
                                            <Image
                                                width={32}
                                                height={32}
                                                className="rounded-full object-cover"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                            <span className="ml-2 font-bold text-[14px]">
                                          {item.name}
                                        </span>
                                        </div>
                                        <div className="text-[14px] text-foreground opacity-75 mt-1">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
                {list.length === 0 && !loading && (
                    <p className="text-center text-gray-400 w-full">
                        暂无留言
                    </p>
                )}
            </div>
        </Container>
    )
}
