import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import Home from './Components/Home'
import Local from './Components/Local'
import Login from './Components/Login'
import Favorite from './Components/Favorite'
import Join from './Components/Join'



const Menu = ({history}) => {
  let email = sessionStorage.getItem("email")

  const onLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('email');
    history.push('/')
  }
  return (
    <div>
    <div className='menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/local'>맛집검색</NavLink>
        <NavLink to='/favorite'>즐겨찾기</NavLink>
        {email ?
          <NavLink to='#' onClick={onLogout}>로그아웃</NavLink>
          :
          <NavLink to='/login'>로그인</NavLink>
        }
        {email && <span style={{paddingLeft:'20px'}}>{email}</span>}
    </div>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/local" component={Local}/>
        <Route path="/favorite" component={Favorite}/>
        <Route path="/login" component={Login}/>
        <Route path="/join" component={Join}/>
    </Switch>
    </div>
  )
}

export default withRouter(Menu)