'use client'

import DashboardComponents from '@/component/DashboardComponents'
import { redirect, } from 'next/navigation'
import React, { Fragment, useEffect } from 'react'

const DashboardPage = () => {

    useEffect(() => {
        const token = localStorage.getItem('jsonwebtoken')
        if (!token) {
            redirect('/')
        }
    })
    return (
        <DashboardComponents>
            <div className='bg-blue-100 rounded-lg'>
                <span>Hello</span>
            </div>
        </DashboardComponents>
    )
}

export default DashboardPage