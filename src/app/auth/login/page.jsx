"use client"
import React from 'react'
import LoginForm from './../../_components/LoginForm/LoginForm';

const page = () => {
  const style = {
    height: "100vh",
    display:"flex",
    alignItems: "center",
    backgroundImage: "url('/images/login_bg.png')",
    backgroundSize: "cover",
  }

  return (
    <div style={style}>
      <LoginForm />
    </div>
  )
}

export default page
