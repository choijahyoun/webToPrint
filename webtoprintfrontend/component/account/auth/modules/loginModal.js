import { Button, Form, Input, notification  } from "antd";
import Link from 'next/link';
import Router from 'next/router'
import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../../store/auth/login/action";
import { errorSelecotor, isLoggedInSelector } from "../../../../store/auth/login/selector";
import Modal from "antd/lib/modal/Modal";
import { orderRequest } from "../../../../store/shop/action";

const LoginModal = (props) =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    alert("로그인이 필요합니다");
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const error = useSelector(errorSelecotor());
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
        console.log(props.form);
        // Router.push('/mypage/orders');
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

    return (
        <>
            {
                props.IsCart === true ? 
                (
                    <button className="btn btn-primary">주문하기</button>
                ) : 
                (
                    <button className="btn btn-primary orderButton1" onClick={showModal}>주문하기</button>
                )
            }
            <Modal title="로그인" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                footer={[]}>
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
                    </div>
                </Form>
            </Modal>
        </>

    );
}
export default LoginModal;