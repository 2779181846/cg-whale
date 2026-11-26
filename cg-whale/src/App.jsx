import './App.css'
import CgTop from './components/Top/cg-top'
import CgHome from './components/Home/cg-home'
import CgAdvantage from './components/Advantage/cg-advantage'
import CgMerit from './components/Merit/cg-merit'
import CgProduct from './components/Product/cg-product'
import Card_5 from './components/Card_5/card_5'
import Card_6 from './components/Card_6/card_6'
import Card_7 from './components/Card_7/card_7'
import CgCustomer from './components/Customer/cg-customer'
import About from './components/About/cg-about'
export default function cgTeamwork() {
  return (
    <div className="body">
      <div class="level-lbg"></div>
      <div className="cg-top "><CgTop/></div>
      <div className="card_1" id='cg-home'><CgHome/></div>
      <div className="card_2 wrapper" id='cg-advantage'><CgAdvantage/></div>
      <div className="card_3 wrapper" id='cg-merit'><CgMerit/></div>
      <div className="card_4" id='cg-product'><CgProduct/></div>
      <div className="card_5" ><Card_5/></div>
      <div className="card_6" ><Card_6/></div>
      <div className="card_7" ><Card_7/></div>
      <div className="card_8" id='cg-customer'><CgCustomer/></div>
      <div className="card_9" id='cg-about'><About/></div>
      <div className="pc-tooltip">
        <div className="toolBox">
          <div className="boxList">
            <div className="listTitle">微信</div>
            <div className="listImg" style={{backgroundImage:'url("http://cgteamwork.com/image/level-9-2.png")'}}></div>
          </div>
          <div className="boxList">
            <div className="listTitle">公众号</div>
            <div className="listImg" style={{backgroundImage:'url("http://cgteamwork.com/image/level-9-3.png")'}}></div>
          </div>
        </div>
      </div>
      <a className="pc-settop" href='#cg-home'>
        <div></div>
      </a>
    </div>
  )
}