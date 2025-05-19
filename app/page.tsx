'use client';

import {HomeData} from "@/components/pages/home/home-data";
import {HomeCode} from "@/components/pages/home/home-code";
import {HomeHero} from "@/components/pages/home/home-hero";
import {HomeDiary} from "@/components/pages/home/home-diary";
import {HomeArticle} from "@/components/pages/home/home-article";

export default function Home() {
    return <div>
        <HomeHero></HomeHero>
        <HomeData></HomeData>
        <HomeCode></HomeCode>
        <HomeDiary></HomeDiary>
        <HomeArticle></HomeArticle>
    </div>
}
