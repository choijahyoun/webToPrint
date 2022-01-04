import MypageNavigation from "../../component/account/modules/mypageNavigation";
import NoticeComponent from "../../component/account/mypage/noticeComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const MypageNotice = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <NoticeComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default MypageNotice;