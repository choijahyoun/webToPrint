import MypageNavigation from "../../component/account/modules/mypageNavigation";
import EstimateComponent from "../../component/account/mypage/estimateComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const MypageEstimate = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <EstimateComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default MypageEstimate;