// models/Article.ts
import { Schema, model, models } from 'mongoose';

export interface IArticle {
    banner: string;
    title: string;
    date: Date;
    describe: string; // 存储富文本/HTML
    tags: string[];
}

const articleSchema = new Schema<IArticle>({
    banner: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    describe: { type: String, required: true },
    tags: [{ type: String }],
});

export const Article = models?.Article || model<IArticle>('Article', articleSchema);