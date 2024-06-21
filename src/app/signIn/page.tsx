'use client'
import React from 'react'

const SignIn = () => {
    return (
        <form action="" className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <span onClick={e => console.log('hello')}>Sign In</span>
        </form>
    )
}

export default SignIn