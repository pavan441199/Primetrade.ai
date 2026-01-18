import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AuthLayout from "./components/auth/layout"
import AdminLayout from "./components/admin-view/layout"
import Dashboard from "./pages/admin-view/dashboard"
import CheckAuth from "./components/common/check-auth"
import { Toaster } from "./components/ui/sonner"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./store/auth-slice"
import { Skeleton } from "@/components/ui/skeleton"


function App() {


  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch])
    ;
  if (isLoading) {
    return <Skeleton className="w-[800px]  bg-black h-[20px] rounded-full" />

  }
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth >}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>


        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth >}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
      <Toaster />
    </div>
  )
}

export default App
