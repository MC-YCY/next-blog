// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: { params: { scope: 'read:user user:email' } },
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            return { ...session, user: { ...session.user, id: user.id } };
        },
    },
    pages: {
        signIn: '/',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

// NextAuth 在 App Router 里必须这样导出
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
