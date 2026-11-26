import Style from './cg-merit.module.scss'
export default function CgMerit() {
    return (
        <>
            <div className={ `${Style.title_3} title`}>
                <div className={Style["t_1"]}>为什么</div>
                <div className={Style["t_2"]}>选择CGWhale</div>
            </div>
            <div className={Style["listBox"]}>
                <div className={Style["LBCont"]}>
                    <div className={Style["leftCont"]}>
                        <div className={Style["leftTitle"]}>提供深入的技术支持</div>
                        <div className={Style["leftText_1"]}>
                            <span className={Style['LTIcon']}></span>
                            <div>本地化部署</div>
                        </div>
                        <div className={Style["leftText_1"]}>
                            <span className={Style['LTIcon']}></span>
                            <div>丰富的API接口</div>
                        </div>
                        <div className={Style["leftText_1"]}>
                            <span className={Style['LTIcon']}></span>
                            <div>技术支持人员一对一答疑</div>
                        </div>
                    </div>
                    <div className={`${Style.rightCont} ${Style.rightCont_1}`}></div> 
                </div>
                <div className={Style["LBCont"]}>
                    <div className={Style["leftCont"]}>
                        <div className={Style["leftTitle"]}>简单易用，多地协同</div>
                        <div className={Style["leftText_2"]}>简单的界面，所见即所得的人机交互体验，灵活的依据不同的需求组织呈现符合使用场景的页面，并连接多地及跨公司协同制作管理，极大的提高生产效率。</div>
                    </div>
                    <div className={`${Style.rightCont} ${Style.rightCont_2}`}></div>
                </div>
            </div>
        </>
    )
}