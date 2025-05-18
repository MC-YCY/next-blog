'use client';

import {HomeData} from "@/components/pages/home/home-data";
import {HomeCode} from "@/components/pages/home/home-code";
import {HomeHero} from "@/components/pages/home/home-hero";
import {HomeDiary} from "@/components/pages/home/home-diary";

export default function Home() {
    return <div>
        <HomeHero></HomeHero>
        <HomeData></HomeData>
        <HomeCode></HomeCode>
        <HomeDiary></HomeDiary>
    </div>
}
