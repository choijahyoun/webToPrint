import  Router  from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, Input, notification } from 'antd';
import {Register_request_personal,
    Register_request_business ,
    Register_success,
    Register_error} from '../../../store/auth/register/action'
import Link from 'next/link';

const RegisterComponent =() =>{

    const form ={
        userName : "",
        useremail : "",
        userPassword : "",
        userPhoneNumber : "",
        userKind : "",
        companyName: "",
        businessPersonName: ""
    }

    const iSPassword = (password) =>
    {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,16}$/; // 6 ~ 16자 영문 , 숫자 조합 
        return regExp.test(password);
    }

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordCheck , setPasswordCheck] = useState("");
    const [phone, setPhone] = useState("");
    const [kind, setKind] = useState("");
    const [businessChecked, setBusinessChecked] = useState();
    const [companyName,setCompanyName] = useState();
    const [businessPersonName,setBusinessPersonName]= useState();
    const [phoneAuth , setPhoneAuth] = useState("");

    const dispatch = useDispatch()

    const Register_personal =(form)=>
    {
        dispatch(Register_request_personal(form))
    }

    const Register_business =(form)=>
    {
        dispatch(Register_request_business(form))
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value);
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const onchangePhoneNumber=(e)=>{
        setPhone(e.target.value);
    }

    const onchangePhoneAuth=()=>{

    }

    const doubleCheckClick = () =>{
        
    }

    const phoneNumAuth=()=>{
        //Todo 인증번호 확인 
    }

    const sendMail=()=>{
        //Todo 인증번호 핸드폰으로 보내기
    }

    const getKind= (e) =>{
        if(e.target.value==="personal")
        {
            setKind("1");
            setBusinessChecked(false);
        }
        else if(e.target.value==="business")
        {
            setKind("2");
            setBusinessChecked(true);
        }
    }

    useEffect(()=>
    {
        if(iSPassword(password)===false)
        {

        }
    },[password])

    useEffect(()=>
    {


    },[passwordCheck])

    const handleOnSubmit = () =>{
        form.userName = userName;
        form.useremail=email;
        form.userPassword=password;
        form.userPhoneNumber=phone;
        form.userKind = kind;
        console.log(form);
        if(form.userKind ==="1")
        {
            Register_personal(form);
        }
        else if(form.userKind==="2")
        {
            form.companyName=companyName;
            form.businessPersonName=businessPersonName;
            Register_business(form);
        }
    }

    return(
        <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={handleOnSubmit}>
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="/account/register">
                                <a>회원가입</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <div className="form-group">
                                <h6>유져명</h6>
                                <Form.Item
                                    name="UserName"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                '유저명을 입력해야합니다.',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="이름"
                                        value={userName}
                                        onChange={(e)=>
                                        {
                                            setUserName(e.target.value);
                                        }}
                                        
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <h6>아이디</h6>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                '이메일을 입력해주세요',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="email"
                                        placeholder="아이디(이메일)"
                                        value={email}
                                        onChange={onChangeEmail}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group form-forgot">
                                <h6>비밀번호</h6>
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
                                        onChange={onChangePassword}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <h6>핸드폰번호</h6>
                                <Form.Item
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                '번호를 입력해주세요',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="핸드폰번호"
                                        value={phone}
                                        onChange={onchangePhoneNumber}
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <input type="radio" name="radio1" value="personal" onChange={getKind}></input>
                                개인
                                <input type="radio" name="radio1" value="business" onChange={getKind}></input>
                                사업자
                                {
                                    businessChecked===true&&(
                                        <>
                                            <br/>
                                            <span>회사명</span>
                                            <input type="text" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}/>
                                            <span>사업자명</span>
                                            <input type="text" value={businessPersonName} onChange={(e)=>{setBusinessPersonName(e.target.value)}}/>
                                        </>
                                    )
                                }
                            </div>
                            <div className="form-group submit">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                    회원가입
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer">
                            {/* <p>sns 로그인</p>
                            <ul className="ps-list--social">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="google" href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default RegisterComponent;
