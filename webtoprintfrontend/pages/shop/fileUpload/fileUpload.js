import FooterDefault from "../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../component/shared/headers/HeaderDefault";
import Upload from "../../../component/shop/fileUpload";


const FileUpload = () =>
{
    return (
        <div>
        <HeaderDefault/>
            <Upload/>
        <FooterDefault/>
        </div>
 
    );
}
export default FileUpload;