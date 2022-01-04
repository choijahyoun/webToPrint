import IdFroget from "../../component/account/idforget";
import PasswordForget from "../../component/account/passwordfoget";
import Footer from "../../component/shared/footer"
import Header from "../../component/shared/header"
import Navigation from "../../component/shared/navigation"

const SerchUser = () =>
{
    return (
        <div>
            <Header/>
            <Navigation/>
            <IdFroget/>
            <PasswordForget/>
            <Footer/>
        </div>
    );
}
export default SerchUser;