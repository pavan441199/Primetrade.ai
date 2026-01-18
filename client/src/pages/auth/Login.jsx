
import { useState } from "react"
import { loginFormControlls } from "../../config"
import { toast } from "sonner"
import CommonForm from "../../components/common/form"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../store/auth-slice"

const initialState = {
    email: "",
    password: "",
}

function Login() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        dispatch(loginUser(formData)).then((data) => {
            if (data?.payload?.success) {
                navigate("/dashboard");
            } else {
                toast.error(data?.payload?.message || "Login failed");
            }
        });
    }




    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign In To Your Account</h1>
                <p className="mt-2">Don't have an account? <Link className="text-primary font-medium ml-2 hover:underline" to="/auth/register">Register</Link></p>
            </div>
            <CommonForm formControls={loginFormControlls} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
