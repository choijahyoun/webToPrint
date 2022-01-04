
import React from 'react'
import HeaderDefault from '../../../component/shared/headers/HeaderDefault';
import Upload from '../../../component/shop/fileUpload';
import FooterDefault from '../../../component/shared/footers/FooterDefault';
import { useRouter } from 'next/router';

const FileUpload = () =>{
    const router = useRouter(); 
    const {pid} = router.query; 
    return (
        <div>
            <HeaderDefault/>
            <Upload id={pid}/>
            <FooterDefault/>
        </div>
    );
}

export default FileUpload;