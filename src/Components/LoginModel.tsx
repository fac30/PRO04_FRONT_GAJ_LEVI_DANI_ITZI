
import React from 'react'
import Layout from '../Components/Layout'

export default function LoginModel() {
  return (
      <Layout>
          <div className="login"></div>
          <legend >email</legend>
          <input required></input>
          <legend>password</legend>
          <input required></input>
          <input type="checkbox">Sign up to news letter</input>

      </Layout>
      
  )
}
