
import { useState } from "react"
import { registerFormControlls } from "../../config"
import { toast } from "sonner"
import CommonForm from "../../components/common/form"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../store/auth-slice"

const initialState = {
    name: "",
    email: "",
    password: "",
}

function Register() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        dispatch(registerUser(formData)).then((data) => {
            if (data?.payload?.success) {
                toast.success("Registration successful! Please login.");
                navigate("/auth/login");
            } else {
                toast.error(data?.payload?.message || "Registration failed");
            }
        });
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create New Account</h1>
                <p className="mt-2">Already have an account? <Link className="text-primary font-medium ml-2 hover:underline" to="/auth/login">Login</Link></p>
            </div>
            <CommonForm formControls={registerFormControlls} formData={formData} setFormData={setFormData} onSubmit={onSubmit} buttonText="Sign Up" />
        </div>
    )
}

export default Register;
