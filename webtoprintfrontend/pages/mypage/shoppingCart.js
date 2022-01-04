import MypageNavigation from "../../component/account/modules/mypageNavigation";
import MypageShoppingCartComponet from "../../component/account/mypage/mypageShoppingCartComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const MypageShoppingCart = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <MypageShoppingCartComponet/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default MypageShoppingCart;