
import MyPageComponent from "../../component/account/mypage/myPage";
import MypageNavigation from "../../component/account/modules/mypageNavigation";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";
import FooterDefault from "../../component/shared/footers/FooterDefault";

const mypage = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <MyPageComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}

export default mypage;