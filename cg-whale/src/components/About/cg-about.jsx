import Style from './cg-about.module.scss';
export default function About(){
    return(
        <>
            <div className={Style["left"]}>
                <div className={Style["address"]}>中国福建省厦门市</div>
            </div>
            <div className={Style["right"]}>
                <div className={Style["title"]}>关于我们</div>
                <div className={Style["text"]}>我们是一支在CG行业拥有丰富经验的开发团队，专注于CG行业，目前主要研发CGWhale流程系统，以及专注为CG行业提供流程系统的解决方案以及相关的技术支持和服务。团队开发过多个版本的系统，拥有丰富的项目经验。</div>
                <div className={Style["lianxi"]}>联系我们</div>
                <div className={Style["tip"]}>中国福建省厦门市</div>
                <div className={Style["tip"]}>QQ:9999999</div>
                <div className={Style["tip"]}>Email:cgwhale@qq.com</div>
                <div className={Style["box"]}>
                    <div className={Style["img_box"]}>
                        <div className={Style["r_text"]}>微信</div>
                        <div className={Style["icon"]} style={{backgroundImage: 'url("xxx")'}}>此为二维码</div>
                    </div>
                    <div className={Style["img_box"]}>
                        <div className={Style["r_text"]}>公众号</div>
                        <div className={Style["icon"]} style={{backgroundImage:'url("xxx")'}}>此为二维码</div>
                    </div>
                </div>
                <div className={Style["beiantext"]}>闽ICP备99999999999</div>
            </div>
        </>
    )
}