import Style from './cg-customer.module.scss'
export default function CgCustomer() {
    return (
        <>
            <div className={`title ${Style['title_8']}`}>深受优秀团队的信赖</div>
            <div className={Style["box"]}>
                <Bards line={0} />
                <Bards line={1} />
                <Bards line={2} />
            </div>
        </>
    )
}
function Bards({ line }) {
    const list = [0, 1, 2, 3, 4, 5,];
    const imgList = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
    ];
    return (
        <>
            <div className={Style["list"]}>
                {list.map((index) => {
                    let url = `http://cgteamwork.com/image/level-8-${imgList[line][index]}.png`;
                    return (
                        <>
                            <span className={Style['icon']} list={index} style={{ backgroundImage: `url(${url})` }}></span>
                            <span className={Style["space"]}></span>
                        </>
                    )
                })}

            </div>
        </>
    )
}
