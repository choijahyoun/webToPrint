
import Register from '../../component/account/auth/register';
import FooterDefault from '../../component/shared/footers/FooterDefault';
import HeaderDefault from '../../component/shared/headers/HeaderDefault';

const register = () =>{
    return(
        <div>
            <HeaderDefault/>
            <Register/>
            <FooterDefault/>
        </div>
    );
}

export default register;