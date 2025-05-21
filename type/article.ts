import {ReactNode} from "react";

export interface ArticleType {
    banner: string,
    title: string,
    date: string,
    describe: string | ReactNode,
    tags: string,
}