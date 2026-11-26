import Style from './cg-product.module.scss'
import { useState } from 'react'
export default function CgProduct() {
    //图片切换
    const videos = ['http://cgteamwork.com/video/2.mp4',
        'http://cgteamwork.com/image/level-4-2.png',
        'http://cgteamwork.com/image/level-4-3.png']
    const fistClassName = ['show', null, null];//初始
    const nullClassName = Array(3).fill(null);//空值
    const [className, setClassName] = useState(fistClassName);
    const [lists, setList] = useState(['show', '', ''])

    function handleClick(i) {
        let nextClassName = nullClassName;
        nextClassName[i] = 'show';
        setClassName(nextClassName);
        // console.log(nextClassName);

        let nextList = Array(3).fill('');
        nextList[i] = 'show';
        setList(nextList);
        console.log(nextList);

    }

    return (
        <>
            <div className={`${Style.title_4} title`} >灵活的项目任务管理</div>
            <div className="exegesis">提供专属电影、剧集、动画的解决方案，实现任务实时分配、查看、提交、审核、跟踪</div>
            <div className={Style["box"]}>
                <div className={Style["left"]}>
                    <div className={`${Style.list} ${lists[0] ? Style[lists[0]] : ''} ${Style.list_top}`} onClick={() => handleClick(0)}>
                        <div className={Style["l_title"]}>多视图切换</div>
                        <div className={Style["l_text"]}>列表、卡片、甘特图等多维度的任务管理方式</div>
                    </div>
                    <div className={`${Style.list} ${lists[1] ? Style[lists[1]] : ''}`} onClick={() => handleClick(1)}>
                        <div className={Style["l_title"]}>自定义模板</div>
                        <div className={Style["l_text"]}>依据需求定制高级/简易的项目模板</div>
                    </div>
                    <div className={`${Style.list} ${lists[2] ? Style[lists[2]] : ''}`} onClick={() => handleClick(2)}>
                        <div className={Style["l_title"]}>灵活的业务流</div>
                        <div className={Style["l_text"]}>依据需求自由定制符合内部使用的业务流</div>
                    </div>
                </div>
                <div className={Style["right"]}>
                    <div className={`${Style.video_box} ${Style.none}${className[0] ? ` ${Style[className[0]]}` : ''}`}>
                        <video className={Style["video "]} src={videos[0]} autoplay="autoplay" loop="loop" muted="muted" width="100%"></video>
                    </div>
                    <img className={`${Style.video} ${Style.none}${className[1] ? ` ${Style[className[1]]}` : ''}`} src={videos[1]} alt="" />
                    <img className={`${Style.video} ${Style.none}${className[2] ? ` ${Style[className[2]]}` : ''}`} src={videos[2]} alt="" />
                </div>
            </div>
        </>
    )
}
