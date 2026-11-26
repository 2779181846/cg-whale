import Style from './cg-top.module.scss';
import { useState } from 'react';
export default function CgTop() {
    const [btn, setBtn] = useState(['show', '', '', '', '']);
    function handelBtn(index) {
        let nextBtn = Array(5).fill('');
        nextBtn[index] = 'show';
        setBtn(nextBtn);
        console.log(btn);
    }
    return (
        <>
            <div className={Style['cgTop']}>
                <div className={Style['topLogo']}></div>
                <div className={Style["topContent"]}>
                    <Contes index={0} cont={'首页'} href={'#cg-home'} handelBtn={handelBtn} btn={btn}/>
                    <Contes index={1} cont={'优势'} href={'#cg-advantage'} handelBtn={handelBtn} btn={btn} />
                    <Contes index={2} cont={'产品'} href={'#cg-product'} handelBtn={handelBtn} btn={btn} />
                    <Contes index={3} cont={'客户'} href={'#cg-customer'} handelBtn={handelBtn} btn={btn} />
                    <Contes index={4} cont={'关于'} href={'#cg-about'} handelBtn={handelBtn} btn={btn} />
                </div>
                <div className={Style.topRight}>
                    <div className={Style['language']}>EN</div>
                    <a href={'#cg-about'} className={Style['freeTry']}>
                        <div>免费试用</div>
                    </a>
                </div>
            </div>
        </>

    )
}
function Contes({ cont, href, index,handelBtn,btn }) {
    // const oldBtn = Array(5).fill('');
    
    return (
        <div className={Style['cont']} >
            <a className={`${Style['c_btn']} ${btn[index] ? Style[btn[index]] : ''}`}
                onClick={() => handelBtn(index)}
                href={href}
            >
                {cont}
            </a>
        </div>
    )
}
