import { useEffect, useState } from 'react';
import Style from './card_7.module.scss';

export default function Card_7() {
    const oldI = [0, 1, 2, 3];
    const oldCircle = ['show', '', '', ''];
    const [i, setI] = useState(oldI);
    const [circle, setCircle] = useState(oldCircle);
    function handleClick_r() {
        setI([i[3], i[0], i[1], i[2]]);
        setCircle([circle[3], circle[0], circle[1], circle[2]]);
        setPositions([positions[3], positions[0], positions[1], positions[2]]);
    }

    function handleClick_l() {
        setI([i[1], i[2], i[3], i[0]]);
        setCircle([circle[1], circle[2], circle[3], circle[0]]);
        setPositions([positions[1], positions[2], positions[3], positions[0]]);

    }

    // 统一处理卡片点击事件
    const oldPositions = [3, 0, 1, 2];
    const [positions, setPositions] = useState(oldPositions);
    const handleCardClick = (position) => {
        if (position === 1) { // 右边卡片
            handleClick_r();
        } else if (position === 3) { // 左边卡片
            handleClick_l();
        }
        // 中间卡片（position 0）不处理点击
    };
    //自动播放
    const [isAuto, setIsAuto] = useState(true);
    useEffect(() => {
        let auto;
        if (isAuto) {
            auto = setInterval(() => {
                handleClick_r();
            }, 3000);
        }
        return () => {
            if (auto) clearInterval(auto); // 清除定时器
        };
    })
    //圆点点击事件0123
    function handleChange(index) {
        setI([oldI[(4 - index) % 4], oldI[(4 - index + 1) % 4], oldI[(4 - index + 2) % 4], oldI[(4 - index + 3) % 4]]);
        let nextCircle = Array(4).fill('');
        nextCircle[index] = 'show';
        setCircle(nextCircle);
        setPositions([oldPositions[(4 - index) % 4], oldPositions[(4 - index + 1) % 4], oldPositions[(4 - index + 2) % 4], oldPositions[(4 - index + 3) % 4]]);
        console.log(positions);

    }
    return (
        <>
            <div className={`${Style.title_7} title`}>丰富的功能应用</div>
            <div className={Style.box}>
                <div className={Style.swiper} onMouseEnter={() => setIsAuto(false)} onMouseLeave={() => setIsAuto(true)}>
                    <Swiper IDBIndex={i[0]} index={0} position={positions[0]} handleClick={handleCardClick} /> {/* 左边 */}
                    <Swiper IDBIndex={i[1]} index={1} position={positions[1]} handleClick={handleCardClick} /> {/* 中间 */}
                    <Swiper IDBIndex={i[2]} index={2} position={positions[2]} handleClick={handleCardClick} /> {/* 右边 */}
                    <Swiper IDBIndex={i[3]} index={3} position={positions[3]} handleClick={handleCardClick} /> {/* 后面 */}
                </div>
                <div class={Style["circle-box"]} onMouseEnter={() => setIsAuto(false)} onMouseLeave={() => setIsAuto(true)}>
                    <Circle index={0} circle={circle} onClick={() => handleChange(0)} />
                    <Circle index={1} circle={circle} onClick={() => handleChange(1)} />
                    <Circle index={2} circle={circle} onClick={() => handleChange(2)} />
                    <Circle index={3} circle={circle} onClick={() => handleChange(3)} />
                </div>
            </div>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
function Swiper({ index, IDBIndex, position, handleClick }) {
    const titleLogo = [
        'http://cgteamwork.com/image/level-7-9.png',
        'http://cgteamwork.com/image/level-7-6.png',
        'http://cgteamwork.com/image/level-7-7.png',
        'http://cgteamwork.com/image/level-7-8.png'
    ];
    const titles = ['资产库', '进度安排', '数据看板', '工时'];
    const text = [
        '轻松收集及整理项目产生的资产或素材...',
        '既可以按多项目进行准确清晰制定制片计划...',
        '丰富的统计面板，可自由选择定义适合自己的统计分析页面...',
        '准确无误的记录人员工时，做到按项目和按人员角度分别统计工时...'
    ];
    const img = [
        'http://cgteamwork.com/image/level-7-5.png',
        'http://cgteamwork.com/image/level-7-2.png',
        'http://cgteamwork.com/image/level-7-3.png',
        'http://cgteamwork.com/image/level-7-4.png'
    ];

    const idClassMap = {
        0: Style.a,
        1: Style.b,
        2: Style.c,
        3: Style.d
    };

    return (
        <div
            className={`${Style.swiper_time} ${idClassMap[IDBIndex]}`}
            onClick={() => handleClick(position)}
        >
            <div className={Style.left}>
                <div className={Style.l_title}>
                    <span style={{ backgroundImage: `url(${titleLogo[index]})` }}></span>
                    <div>{titles[index]}</div>
                </div>
                <div className={Style.l_text}>{text[index]}</div>
            </div>
            <div className={Style.right}>
                <div className={Style.r_img} style={{ backgroundImage: `url(${img[index]})` }}></div>
            </div>
        </div>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
function Circle({ index, circle, onClick }) {
    return (
        <span className={circle[index] ? Style[circle[index]] : ''} onClick={onClick}></span>
    )
}
