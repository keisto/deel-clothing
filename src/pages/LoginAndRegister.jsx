import React from 'react'

import './LoginAndRegister.scss'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const LoginAndRegister = () => (
  <div className="login-and-register">
    <Login />
    <Register />
  </div>
)

export default LoginAndRegister
