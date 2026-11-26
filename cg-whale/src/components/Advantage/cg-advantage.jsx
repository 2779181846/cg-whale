import Style from './cg-advantage.module.scss'
export default function CgAdvantage() {
    return (
        <>
            <div className={`${Style.title_2} title`} >八大核心功能</div>
            <div className={Style["listBox"]}>
                <Cards url='http://cgteamwork.com/image/level-2-1.png' title='任务管理' text='可以实现任务的实时分配、查看、提交、审核、跟踪。' />
                <Cards url='http://cgteamwork.com/image/level-2-2.png' title='文件管理' text='规范化管理项目的目录结构和文件版本，通过文件框实现文件的便捷管理。' />
                <Cards url='http://cgteamwork.com/image/level-2-3.png' title='流程管理' text='自定义审核流程，上下游环节协作流程。' />
                <Cards url='http://cgteamwork.com/image/level-2-4.png' title='插件管理' text='基于生产软件的二次开发，提供丰富的API接口，可以满足TD的定制化需求，更好的和制作软件以及pipeline进行集成。' />
                <Cards url='http://cgteamwork.com/image/level-2-5.png' title='通讯系统' text='通过内部的即时消息系统，实现团队沟通，文件传输，系统消息自动通知。' />
                <Cards url='http://cgteamwork.com/image/level-2-6.png' title='统计分析' text='结合进度预排和统计分析功能，进行项目进度跟踪，实时掌握项目和人员动态。' />
                <Cards url='http://cgteamwork.com/image/level-2-7.png' title='多地协作' text='支持与分公司，外包，自由职业者的网络化协作，实现在线的任务管理，文件管理，文件审核，进度跟踪。' />
                <Cards url='http://cgteamwork.com/image/level-2-8.png' title='在线审片' text='支持多镜头串播，版本对比，并支持画标记，录屏，录摄像头，录音等多种反馈形式。' />
            </div>
        </>
    )
}
function Cards({ url, title, text }) {
    return (
        <div className={Style["card"]}>
            <div className={Style["carImage"]} style={{ backgroundImage: `url(${url})` }}></div>
            <div className={Style["cardTitle"]}>{title}</div>
            <div className={Style["cardText"]}>{text}</div>
        </div>
    )

}