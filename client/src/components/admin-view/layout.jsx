import React from 'react'
import AdminHeader from './header'
import AdminSider from './sider'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
const AdminLayout = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex min-h-screen w-full'>
            {/* sidebar */}
            <AdminSider open={open} setOpen={setOpen} />
            <div className='flex flex-1 flex-col'>
                {/* adminheader */}
                <AdminHeader setOpen={setOpen} />
                <main className='flex flex-col flex-1 bg-muted/40 p-4 md:p-6 '>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;
