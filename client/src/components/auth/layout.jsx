import { Outlet } from "react-router-dom";

function AuthLayout() {

    return (
        <div className=" flex min-h-screen w-full">
            <div className=" hidden lg:flex item-center justify-center bg-black w-1/2 px-12  ">
                <div className="max-w-md flex flex-col  justify-center space-y-6 text-center text-primary-foreground">
                    <h2 className="text-3xl font-extrabold tracking-tight">Welcome To Primetrade.Ai</h2>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    )

}

export default AuthLayout;
