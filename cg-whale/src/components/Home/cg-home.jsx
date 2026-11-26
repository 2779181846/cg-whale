import Style from './cg-home.module.scss'
export default function CgHome() {
    return (
        <>
            <div className={`${Style.title_1} title`} >国内用户数最多的CG项目管理系统</div>
            <div className="exegesis">专注为CG行业提供流程解决方案，致力于提升CG行业协同效率</div>
            <div className={Style["active"]}>
                <a className={Style["cgHomeBtn"]} href='#cg-about'>免费试用</a>
            </div>
            <div className={Style["videoContent"]}>
                <div className={Style["VCBox"]}>
                    <div className={Style["VCHead"]}>
                        <span className={Style["circle red"]}></span>
                        <span className={Style["circle yellow"]}></span>
                        <span className={Style["circle green"]}></span>
                        <div className={Style["cheekBox"]}>cgteamwork.com</div>
                    </div>
                    <video className={Style["video_1"]} src="http://cgteamwork.com/video/2.mp4" autoplay="autoplay" loop="loop" muted="muted" ></video>
                </div>
            </div>
        </>
    )
}