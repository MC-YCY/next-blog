import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from 'next-themes'
import {Header} from "@/components/project/header/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Blog",
    description: "Next.js Blog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"        // 在 <html> 上加 class="light" / "dark"
            defaultTheme="system"    // 默认跟随系统
            enableSystem={true}      // 监听系统主题变化
            storageKey="theme"       // localStorage key
        >
            <Header></Header>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
