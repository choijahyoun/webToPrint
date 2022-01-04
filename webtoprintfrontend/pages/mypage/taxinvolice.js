import MypageNavigation from "../../component/account/modules/mypageNavigation";
import TaxInvoliceComponent from "../../component/account/mypage/taxInvoliceComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const TaxInvolice = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <TaxInvoliceComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default TaxInvolice;