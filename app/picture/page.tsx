'use client';
import {Container} from "@/components/project/container";
import {PartTitle} from "@/components/project/part-title/part-title";
import {PicturePreview, PictureSwiperItemContent} from "@/components/pages/picture/picture";
import {useState} from "react";
import {PictureType} from "@/type/picture";

const PicturePageItem = ({item, index}: { item: PictureType, index: number }) => {
    const [previewState, setPreviewState] = useState<PictureType>({
        name: '',
        tip: '',
        describe: '',
        date: '',
        url: '',
    });
    const setStates = (item: PictureType, index: number, state: PictureType) => {
        setPreviewState(state)
    }
    return <div>
        <PartTitle className={'pt-6 pb-3 px-2'} titleclassname={'text-[18px] opacity-80'} title={item.name}
                   action={<PicturePreview {...previewState}></PicturePreview>}></PartTitle>
        <div
            className={'w-full h-[76vh] max-h-[768px] bg-background shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,.1)] rounded-[14px] overflow-hidden'}>
            <PictureSwiperItemContent activeIndex={0} slideIndex={0}
                                      setStates={(state) => setStates(item, index, state)} {...item}></PictureSwiperItemContent>
        </div>
    </div>
}

const PicturePage = () => {
    const [list] = useState<PictureType[]>([
        {
            name: '林琦婷（琦琦小霸王🧸）',
            tip: '是简简单单的欣赏',
            describe: `演员 林琦婷 努力加油 尽力而为
新剧：《穿成女配后 公主她不伺候了》姜玥 《开局遇到高冷校花》叶弥月 《归期未有期》颜朝舞《我的电子女友咋修成剑仙》李清然 《学姐我的心被你偷啦》苏白粥《锦绣繁华》谢静姝《偷听有戏》林清寒《悔不当初》柳如烟《年下弟弟又野又凶》林夕 《我家宝匣通古今 女帝认我做老公》独孤月 《订婚被抛弃 我转身娶了京圈大小姐》凌若潇 《听见你的声音》程清禾 《步步沉沦》林知夏`,
            date: new Date(),
            url: '/images/演员/林琦婷/group-a-1.jpeg',
            children: [
                {
                    name: '林琦婷（琦琦小霸王🧸）',
                    tip: '是简简单单的欣赏',
                    describe: `演员 林琦婷 努力加油 尽力而为
新剧：《穿成女配后 公主她不伺候了》姜玥 《开局遇到高冷校花》叶弥月 《归期未有期》颜朝舞《我的电子女友咋修成剑仙》李清然 《学姐我的心被你偷啦》苏白粥《锦绣繁华》谢静姝《偷听有戏》林清寒《悔不当初》柳如烟《年下弟弟又野又凶》林夕 《我家宝匣通古今 女帝认我做老公》独孤月 《订婚被抛弃 我转身娶了京圈大小姐》凌若潇 《听见你的声音》程清禾 《步步沉沦》林知夏`,
                    date: '2025/5/22',
                    url: '/images/演员/林琦婷/group-a-1.jpeg',
                },
                {
                    name: '林琦婷（琦琦小霸王🧸）',
                    tip: '是简简单单的欣赏',
                    describe: `演员 林琦婷 努力加油 尽力而为
新剧：《穿成女配后 公主她不伺候了》姜玥 《开局遇到高冷校花》叶弥月 《归期未有期》颜朝舞《我的电子女友咋修成剑仙》李清然 《学姐我的心被你偷啦》苏白粥《锦绣繁华》谢静姝《偷听有戏》林清寒《悔不当初》柳如烟《年下弟弟又野又凶》林夕 《我家宝匣通古今 女帝认我做老公》独孤月 《订婚被抛弃 我转身娶了京圈大小姐》凌若潇 《听见你的声音》程清禾 《步步沉沦》林知夏`,
                    date: '2025/5/22',
                    url: '/images/演员/林琦婷/group-a-2.jpeg',
                },
                {
                    name: '林琦婷（琦琦小霸王🧸）',
                    tip: '是简简单单的欣赏',
                    describe: `演员 林琦婷 努力加油 尽力而为
新剧：《穿成女配后 公主她不伺候了》姜玥 《开局遇到高冷校花》叶弥月 《归期未有期》颜朝舞《我的电子女友咋修成剑仙》李清然 《学姐我的心被你偷啦》苏白粥《锦绣繁华》谢静姝《偷听有戏》林清寒《悔不当初》柳如烟《年下弟弟又野又凶》林夕 《我家宝匣通古今 女帝认我做老公》独孤月 《订婚被抛弃 我转身娶了京圈大小姐》凌若潇 《听见你的声音》程清禾 《步步沉沦》林知夏`,
                    date: '2025/5/22',
                    url: '/images/演员/林琦婷/group-b-1.jpeg',
                },
            ]
        },
        {
            name: '马秋元',
            tip: '是简简单单的欣赏',
            describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
            date: '2025/5/22',
            url: '/images/演员/马秋元/group-a-1.png',
            children: [
                {
                    name: '马秋元',
                    tip: '是简简单单的欣赏',
                    describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
                    date: '2025/5/22',
                    url: '/images/演员/马秋元/group-a-1.png',
                },
                {
                    name: '马秋元',
                    tip: '是简简单单的欣赏',
                    describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
                    date: '2025/5/22',
                    url: '/images/演员/马秋元/group-a-2.png',
                },
                {
                    name: '马秋元',
                    tip: '是简简单单的欣赏',
                    describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
                    date: '2025/5/22',
                    url: '/images/演员/马秋元/group-a-3.png',
                },
                {
                    name: '马秋元',
                    tip: '是简简单单的欣赏',
                    describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
                    date: '2025/5/22',
                    url: '/images/演员/马秋元/group-b-1.png',
                },
                {
                    name: '马秋元',
                    tip: '是简简单单的欣赏',
                    describe: '2022年底，马秋元拍摄短剧《小魔女秋元》正式踏入娱乐圈。2023年3月份参演首部古装剧集《回到古代当太子》，随后陆续拍摄《洛泱公主》、《一不小心撩错人》、《重生后我成了皇叔的心尖宠》、《少帅天天求复合》、《白月光攻略手册》、《合约期间爱上她》、《落花时节又逢君》、《清宫辞》、《桃花马上请长缨》等多部影视作品。2024年9月搭档杨泽出演古装甜宠剧《春宵》。',
                    date: '2025/5/22',
                    url: '/images/演员/马秋元/group-b-2.png',
                },
            ]
        },
        {
            name: '黎晟萱',
            tip: '是简简单单的欣赏',
            describe: '一个理科生（应该算正在努力当演员）的养成系演员！短剧《开局女帝盯上了我的彩礼》《练气3000层，开局收女帝为徒》《犹为离人照落花》《厉总，江秘书她离职了》《你竟然是我的前妻》《爱上你的心脏》《上岸吧人鱼殿下》《婚姻的温度》《肥妻逆袭，冷酷厂长追疯了》《原谅他99次》《沈总，你养的金丝雀变凤凰了》《丑妃倾天下：禁欲王爷宠疯了》',
            date: '2025/5/22',
            url: '/images/演员/黎晟萱/group-a-1.jpg',
            children: [
                {
                    name: '黎晟萱',
                    tip: '是简简单单的欣赏',
                    describe: '一个理科生（应该算正在努力当演员）的养成系演员！短剧《开局女帝盯上了我的彩礼》《练气3000层，开局收女帝为徒》《犹为离人照落花》《厉总，江秘书她离职了》《你竟然是我的前妻》《爱上你的心脏》《上岸吧人鱼殿下》《婚姻的温度》《肥妻逆袭，冷酷厂长追疯了》《原谅他99次》《沈总，你养的金丝雀变凤凰了》《丑妃倾天下：禁欲王爷宠疯了》',
                    date: '2025/5/22',
                    url: '/images/演员/黎晟萱/group-a-1.jpg',
                },
                {
                    name: '黎晟萱',
                    tip: '是简简单单的欣赏',
                    describe: '一个理科生（应该算正在努力当演员）的养成系演员！短剧《开局女帝盯上了我的彩礼》《练气3000层，开局收女帝为徒》《犹为离人照落花》《厉总，江秘书她离职了》《你竟然是我的前妻》《爱上你的心脏》《上岸吧人鱼殿下》《婚姻的温度》《肥妻逆袭，冷酷厂长追疯了》《原谅他99次》《沈总，你养的金丝雀变凤凰了》《丑妃倾天下：禁欲王爷宠疯了》',
                    date: '2025/5/22',
                    url: '/images/演员/黎晟萱/group-a-2.jpg',
                },
                {
                    name: '黎晟萱',
                    tip: '是简简单单的欣赏',
                    describe: '一个理科生（应该算正在努力当演员）的养成系演员！短剧《开局女帝盯上了我的彩礼》《练气3000层，开局收女帝为徒》《犹为离人照落花》《厉总，江秘书她离职了》《你竟然是我的前妻》《爱上你的心脏》《上岸吧人鱼殿下》《婚姻的温度》《肥妻逆袭，冷酷厂长追疯了》《原谅他99次》《沈总，你养的金丝雀变凤凰了》《丑妃倾天下：禁欲王爷宠疯了》',
                    date: '2025/5/22',
                    url: '/images/演员/黎晟萱/group-a-3.jpg',
                },
            ]
        },
        {
            name: '邢暖',
            tip: '是简简单单的欣赏',
            describe: '',
            date: '2025/5/26',
            url: '/images/演员/邢暖/mmexport1748234645314.jpeg',
            children: [
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234645314.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234645635.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234645762.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234646129.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234646387.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234646793.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234647097.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234647318.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234647439.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234647807.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234647923.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234648063.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234648287.jpeg',
                },
                {
                    name: '邢暖',
                    tip: '是简简单单的欣赏',
                    describe: '',
                    date: '2025/5/26',
                    url: '/images/演员/邢暖/mmexport1748234648802.jpeg',
                },
            ]
        },
        {
            name: '海琴烟',
            tip: '鬼刀漫画中的公主',
            describe: '海琴烟是北漠（Northland）的公主，拥有罕见的冰系能力，被称为“冰公主”。她的国家因战乱或某种黑暗力量而覆灭，导致她流落他乡，成为被通缉的逃亡者。',
            date: '2025/5/22',
            url: '/images/鬼刀公主/海琴烟01.jpg',
            children: [
                {
                    name: '海琴烟',
                    tip: '鬼刀漫画中的公主',
                    describe: '海琴烟是北漠（Northland）的公主，拥有罕见的冰系能力，被称为“冰公主”。她的国家因战乱或某种黑暗力量而覆灭，导致她流落他乡，成为被通缉的逃亡者。',
                    date: '2025/5/22',
                    url: '/images/鬼刀公主/海琴烟01.jpg',
                },
                {
                    name: '海琴烟',
                    tip: '背景',
                    describe: '北漠因战乱或神秘力量覆灭后流亡，成为圣堂通缉的“罪人”。',
                    date: '2025/5/22',
                    url: '/images/鬼刀公主/海琴烟02.jpg',
                },
                {
                    name: '海琴烟',
                    tip: '能力',
                    describe: '可凝结冰雪、制造冰刃或屏障，觉醒后甚至能冻结时间（片段暗示）。',
                    date: '2025/5/22',
                    url: '/images/鬼刀公主/海琴烟03.png',
                },
            ]
        },
        {
            name: '一些壁纸',
            tip: '',
            describe: '换一换壁纸让老旧的电脑多点新鲜感',
            date: '2025/5/22',
            url: '/images/壁纸/【雨天】2024-09-23 13_49_10.png',
            children: [
                {
                    name: '雨天',
                    tip: '',
                    describe: '换一换壁纸让老旧的电脑多点新鲜感',
                    date: '2025/5/22',
                    url: '/images/壁纸/【雨天】2024-09-23 13_49_10.png',
                },
                {
                    name: '晕染',
                    tip: '',
                    describe: '金丝云锦的感觉',
                    date: '2025/5/22',
                    url: '/images/壁纸/【哲风壁纸】壁纸-晕染.png',
                },
                {
                    name: '清新花朵',
                    tip: '',
                    describe: '可凝结冰雪、制造冰刃或屏障，觉醒后甚至能冻结时间（片段暗示）。',
                    date: '2025/5/22',
                    url: '/images/壁纸/【哲风壁纸】浪漫-清新-背景图.png',
                },
                {
                    name: '天安门',
                    tip: '',
                    describe: '夕阳下的城楼',
                    date: '2025/5/22',
                    url: '/images/壁纸/8624.png',
                },
            ]
        }
    ]);
    return <div className={'pt-[64px]'}>
        <Container>
            <PartTitle title={'一些"小藏品"'}
                       description={'信我都是在群里收藏的，我想你们知道我是个收藏仔...'}></PartTitle>
            {
                list.map((item, index) => {
                    return <PicturePageItem key={item.url + index} item={item} index={index}></PicturePageItem>
                })
            }
        </Container>
    </div>
}
export default PicturePage