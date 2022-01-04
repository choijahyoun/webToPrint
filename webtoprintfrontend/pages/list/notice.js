import ListBoardComponent from "../../component/board/listBoardComponent";
import BreadCrumb from "../../component/elements/BreadCrumb";
import FooterDefault from "../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";

const notice = () =>
{ 
    const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: '공지게시판',
    },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            {/* <HeaderMobile /> */}
            {/* <NavigationList /> */}
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb}/>
                <ListBoardComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default notice;