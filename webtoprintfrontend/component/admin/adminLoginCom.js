import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { LoginAction } from "../../store/auth/login/action";
import { errorSelecotor, isLoggedInSelector } from "../../store/auth/login/selector";

const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiForm = dynamic(() => import('@elastic/eui/').then(module => module.EuiForm),{ssr:false});
const EuiFormRow = dynamic(() => import('@elastic/eui/').then(module => module.EuiFormRow),{ssr:false});
const EuiFieldText = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AdminLoginCom = () =>
{
    const error = useSelector(errorSelecotor());
    const isLoggedIn = useSelector(isLoggedInSelector());
    //ToDo: 유저 아이디, 유저 이름 , 유저 이메일 , 비밀번호 form 만들기 
    const form = {
        UserEmail : "",
        UserPassword : "",
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginButton = () =>
    {
        form.UserEmail = email;
        form.UserPassword = password;
        console.log('로그인');
        dispatch(LoginAction(form));
    }
    useEffect(()=>
    {
        if(error.error==='UserNotExist')
        {
            alert("아이디가 잘못됬습니다.");
            error.error="";
            
        }
        else if(error.error==="WrongPassword")
        {
            alert("비밀번호가잘못되었습니다.");
            error.error="";
        }
    },[error])

    useEffect(()=>
    {
        console.log(isLoggedIn)
        if(isLoggedIn===true)
        {
            alert('로그인되었습니다.');
            Router.push('/');
        }
    },[isLoggedIn])
    return (
        <div>
            <div>
                <h3>관리자 로그인</h3>
            </div>
            <EuiForm >  
                <EuiFormRow helpText="아이디(이메일)">
                    <EuiFieldText value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </EuiFormRow>
                <EuiFormRow helpText="비밀번호">
                    <EuiFieldText type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </EuiFormRow>
                <EuiButton type="button" fill onClick={()=>loginButton()}>
                    로그인
                </EuiButton>
            </EuiForm>
        </div>
    );
}
export default AdminLoginCom;