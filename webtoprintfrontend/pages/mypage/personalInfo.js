
import MypageNavigation from "../../component/account/modules/mypageNavigation";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import PersonalInfoComponent from "../../component/account/mypage/personalInfoComponent";

const PersonalInfo = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <PersonalInfoComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}

export default PersonalInfo;