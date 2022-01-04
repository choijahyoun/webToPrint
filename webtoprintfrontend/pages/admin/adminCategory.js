import AdminCategoryMainTain from "../../component/admin/category"
import AdminHeader from "../../component/admin/Layout/header"
import TestCategory from "../../component/admin/modules/testCategory"



const Category = () =>
{
    
    return (
        <div>
            <AdminHeader/>
            {/* <AdminCategoryMainTain/> */}
            <TestCategory/>
        </div>
    );
}
export default Category;