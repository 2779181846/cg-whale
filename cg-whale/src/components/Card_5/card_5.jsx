import Style from './card_5.module.scss'
export default function Card_5() {
    return(
        <>
            <div className="title">随时随地在线审阅</div>
            <div className="exegesis">多人同步审片，多端在线批注</div>
            <div className={Style['box']}>
                <div className={Style['not-icon']}></div>
                <div className={Style['mobile-icon']}></div>
                <video class={Style["video"]} src="http://cgteamwork.com/video/3.mp4" autoplay="autoplay" loop="loop" muted="muted" height="524" width="100%"></video>
            </div>
        </>
    )
}