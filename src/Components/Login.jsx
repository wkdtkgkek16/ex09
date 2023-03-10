import React, { useState } from 'react'
import './Login.css'
import {app} from '../firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = ({history}) => {
  const auth = getAuth(app);
  const [form, setForm] = useState({
    email: "user01@email.com",
    password: "12341234"
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const {email, password} = form;
  const onSubmit = (e) => {
    e.preventDefault();
    //로그인체크
    signInWithEmailAndPassword(auth, email, password)
    .then((success)=> {
      alert('로그인성공')
      sessionStorage.setItem('email',email);
      history.go(-1)
    })
    .catch((error)=> {
      alert('로그인실패'+error.message)
    });
  }
  return (
    <div className='login'>
        <div className='box'>
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <input name="email" value={email} onChange={onChange}/>
            <input type='password' name='password' value={password} onChange={onChange}/>
            <button className='logbutton'><b>로그인</b></button><br/>
            <Link to="/join">회원가입</Link>
          </form>
        </div>
    </div>
  )
}

export default Login