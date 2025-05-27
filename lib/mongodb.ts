import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!
const options = {}

// 在全局缓存 MongoClient 连接，避免热重载建立多个连接
declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient>
}

// 新建/复用全局连接 Promise
const clientPromise: Promise<MongoClient> = global._mongoClientPromise ||
    (global._mongoClientPromise = new MongoClient(uri, options).connect())

export default clientPromise