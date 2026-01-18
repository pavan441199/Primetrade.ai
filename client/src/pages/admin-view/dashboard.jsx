import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <div className='bg-card p-6 rounded-lg shadow'>
                <h2 className='text-xl font-semibold mb-4'>Welcome, {user?.userName || 'User'}!</h2>
                <div className='space-y-2'>
                    <p><span className='font-medium'>Email:</span> {user?.email}</p>
                    <p><span className='font-medium'>Name:</span> {user?.userName}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
