import { ChartNoAxesCombined, LayoutDashboard } from 'lucide-react';
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';

export const adminSideBarMenuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard />,
    }
]

function MenuItems({ setOpen }) {
    const navigate = useNavigate();

    return <nav className='mt-8 flex-col flex gap-2'>

        {
            adminSideBarMenuItems.map((item) => (
                <div key={item.id} onClick={() => {
                    navigate(item.path);
                    if (setOpen) setOpen(false);
                }} className='flex cursor-pointer text-xl text-muted-foreground hover:bg-muted  hover:text-foreground items-center gap-2 rounded-md px-3 py-2'>

                    {item.icon}
                    {item.label}
                </div>
            ))
        }
    </nav>
}



const AdminSider = ({ open, setOpen }) => {


    const navigate = useNavigate();

    return (
        <Fragment>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-64">
                    <div className='flex flex-col h-full'>
                        <SheetHeader className="border-b">
                            <SheetTitle className=" flex gap-2 mt-5 mb-5">
                                <ChartNoAxesCombined size={30} />
                                <span className='text-2xl font-extrabold'>User Panel</span>
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                User Panel Navigation
                            </SheetDescription>
                        </SheetHeader>
                        <MenuItems setOpen={setOpen} />
                    </div>

                </SheetContent>

            </Sheet>

            <aside className='hidden w-64 flex-col border-r bg-background  p-6 lg:flex'>
                <div onClick={() => navigate('/dashboard')} className='flex cursor-pointer items-center gap-2'>
                    <ChartNoAxesCombined size={30} />
                    <h1 className='text-2xl font-extrabold'>User Panel</h1>

                </div>
                <MenuItems />
            </aside>
        </Fragment>
    )
}

export default AdminSider;
