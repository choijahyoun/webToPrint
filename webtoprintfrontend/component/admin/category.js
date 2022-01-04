import { useState } from "react";
import ProductCategory from "./modules/productCategory"

const AdminCategoryMainTain = () =>
{
    const [productName , setProductName] =useState();
    
    return(
        <div>
            <ProductCategory/>
        </div>
    );
}
export default AdminCategoryMainTain;