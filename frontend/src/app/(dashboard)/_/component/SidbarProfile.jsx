'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import UserProfile from './UserProfile'

function SidbarProfile({className}) {
    const { user } = useAuth()

    return (
        <UserProfile user={user} className={className}/>
    )
}

export default SidbarProfile
