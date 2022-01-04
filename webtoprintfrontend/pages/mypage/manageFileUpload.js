import MypageNavigation from "../../component/account/modules/mypageNavigation";
import ManageFileComponent from "../../component/account/mypage/manageFileComponent";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const ManageFileUpload = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <ManageFileComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default ManageFileUpload;