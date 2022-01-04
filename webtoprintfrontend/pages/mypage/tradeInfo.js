import MypageNavigation from "../../component/account/modules/mypageNavigation";
import TradeInfoComponent from "../../component/account/mypage/tradeInfoComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const TradeInfo = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <TradeInfoComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default TradeInfo;