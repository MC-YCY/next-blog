// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// 这里只导出 GET 和 POST，不再 export authOptions
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
