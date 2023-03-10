import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {app} from '../firebase'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const Join = ({history}) => {
    const auth = getAuth(app)
    const [form, setForm] = useState({
        email:'user10@email.com',
        password: '12341234'
    });
    const {email, password} = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!window.confirm('가입 합니까?')) return;
        //회원가입
        createUserWithEmailAndPassword(auth, email, password)
        .then((success)=>{
            alert('회원가입 성공')
            history.push('/login')
        })
        .catch((error)=> {
            alert("회원가입 실패");
        })
    }
    return (
        <div className='login'>
            <div className='box'>
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <h5>아이디</h5>
                <input name="email" value={email} onChange={onChange}/>
                <h5>비밀번호</h5>
                <input type='password' name='password' value={password} onChange={onChange}/>
                <button className='join'><b>가입하기</b></button>
                
            </form>
            </div>
        </div>
    )
}

export default Join