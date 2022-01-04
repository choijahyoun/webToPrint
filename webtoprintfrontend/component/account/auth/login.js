import Link from 'next/link';
import Router from 'next/router'
import {React, useEffect, useState} from 'react'
import { Form, Input, notification } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import {LoginAction} from '../../../store/auth/login/action'
import { errorSelecotor, isLoggedInSelector } from '../../../store/auth/login/selector';
//ToDo: 쿠키에 토큰을 넣는것 까지는 되었다 하지만 새로고침을 할 떄마다 로그아웃이 되는 것을 방지 하여야 한다. 
//로그인을 할때 쿠키에 넣어야 하고 로그아웃을 할 떄 쿠키가 사라져야 한다. 그러면 쿠키가 사라질떄까지 계속 로그인 정보가 남아 있을 것이다. 
const Login = () =>{
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

    const userLogin = (form) =>{

        dispatch(LoginAction(form));

    };

    const onChangeEmail= (e) =>{
        setEmail(e.target.value);
        
    };

    const onChangePassword = (e) =>{
        setPassword(e.target.value);
        
    };

    const handleLoginSubmit= (e) =>{
        form.UserEmail = email;
        form.UserPassword = password;
        userLogin(form);
       
    };

    const handleFeatureWillUpdate= (e)=> {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
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
    
    return(
        <div className="ps-my-account">
        <div className="container">
            <Form
                className="ps-form--account"
                onFinish={handleLoginSubmit}>
                <ul className="ps-tab-list">
                    <li className="active">
                        <Link href="/account/login">
                            <a>로그인</a>
                        </Link>
                    </li>
                </ul>
                <div className="ps-tab active" id="sign-in">
                    <div className="ps-form__content">
                        <div className="form-group">
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            '이메일을 입력해주세요',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="아이디(이메일)"
                                    value={email}
                                    onChange={(e)=>{
                                        onChangeEmail(e)
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group form-forgot">
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            '비밀번호를 입력해주세요',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="password"
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={(e)=>
                                    {
                                        onChangePassword(e)
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group">
                            <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="remember-me"
                                    name="remember-me"
                                />
                                <label htmlFor="remember-me">
                                    아이디 저장
                                </label>
                            </div>
                        </div>
                        <div className="form-group submit">
                            <button
                                type="submit"
                                className="ps-btn ps-btn--fullwidth">
                                로그인
                            </button>
                        </div>
                    </div>
                    {/* ToDo: 소셜로그인 구현 준비 */}
                    <div className="ps-form__footer">
                        <p>소셜 로그인</p>
                        <ul className="ps-list--social">
                            <li>
                                <a
                                    className="facebook"
                                    href="#"
                                    onClick={e =>
                                        handleFeatureWillUpdate(e)
                                    }>
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="google"
                                    href="#"
                                    onClick={e =>
                                        handleFeatureWillUpdate(e)
                                    }>
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="#"
                                    onClick={e =>
                                        handleFeatureWillUpdate(e)
                                    }>
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="#"
                                    onClick={e =>
                                        handleFeatureWillUpdate(e)
                                    }>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Form>
        </div>
    </div>
    );
}

export default Login;