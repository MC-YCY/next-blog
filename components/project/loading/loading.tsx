import style from './style.module.css';
import {cn} from "@/lib/utils";

export const Loading = () => {
    return <div className={style.loading}>
        <div className={style['loading-wide']}>
            <div className={cn(style.l1, style.color)}></div>
            <div className={cn(style.l2, style.color)}></div>
            <div className={cn(style.e1,style.color,style['animation-effect-light'])}></div>
            <div className={cn(style.e2,style.color,style['animation-effect-light-d'])}></div>
            <div className={cn(style.e3,style['animation-effect-rot'])}></div>
            <div className={cn(style.e4,style.color,style['animation-effect-light'])}></div>
            <div className={cn(style.e5,style.color,style['animation-effect-light-d'])}></div>
            <div className={cn(style.e6,style.color,style['animation-effect-scale'])}></div>
            <div className={cn(style.e7,style.color)}></div>
            <div className={cn(style.e8,style.color)}></div>
        </div>
    </div>
}