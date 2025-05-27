import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import clientPromise from '@/lib/mongodb'
import dayjs from 'dayjs'
import {authOptions} from "@/lib/auth";
export async function POST(req: NextRequest) {
    // 校验登录
    const session = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json({ error: '未登录' }, { status: 401 })
    }

    // 解析请求体
    const { text } = await req.json()
    if (!text || typeof text !== 'string' || !text.trim()) {
        return NextResponse.json({ error: '留言内容不能为空' }, { status: 400 })
    }

    const user = session.user!
    const db = (await clientPromise).db()
    const collection = db.collection('messages')

    // 构建新留言对象
    const newMessage = {
        text: text.trim(),
        name: user.name || '匿名',
        image: user.image || '/default-avatar.png',
        date: dayjs().format('YYYY/MM/DD HH:mm:ss'),
    }

    // 写入数据库
    await collection.insertOne(newMessage)

    return NextResponse.json({ message: newMessage }, { status: 201 })
}

/**
 * GET /api/messages
 * 查询所有留言，按时间倒序
 */
export async function GET() {
    const db = (await clientPromise).db()
    const collection = db.collection('messages')

    const messages = await collection
        .find()
        .sort({ _id: -1 })
        .toArray()

    return NextResponse.json({ messages })
}