import Style from './card_6.module.scss'
export default function Card_6() {
    return (
        <>
            <div className="title">企业级文件储存</div>
            <div className="exegesis">深度绑定百度网盘企业版、阿里云对象存储、腾讯云对象存储，提供强大云存储能力的多人共享协作、文件极速传输解决方案</div>
            <div className={Style["box"]}>
                <div className={Style["left-icon"]}></div>
                <div className={Style["right-box"]}>
                    <Cards index='01' title='极速' text='企业文件极速传输，全员共享极速空间' />
                    <Cards index='02' title='共享' text='多人共享大空间，文件管理协同更便捷' />
                    <Cards index='03' title='安全' text='独立的企业数据库，专属企业文件通道' />
                    <Cards index='04' title='特惠' text='联系我们享受平台补贴开通使用百度网盘企业版' />
                </div>
            </div>
        </>
    )
}

function Cards({ index, title, text }) {
    return (
        <>
            <div className={Style["list"]}>
                <div className={Style["l_title"]}>
                    <span className={Style["l_active"]}>{index}</span>
                    <div>{title}</div>
                </div>
                <div className={Style["l_text"]}>
                    <div>{text}</div>
                    {index === '04' && (<div className={Style["advance"]}>至尊版</div>)}
                </div>
            </div>
        </>
    )
}

