import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../store/slices/authSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "me@exemple.com",
        password: "1234"
    })
    const handleInput = ({ target: { name, value } }) => {
        setForm((f) => ({
            ...f,
            [name]: value,
        }))
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const result = {
            user: {
                id: "dedweuidweyfvyc",
                first_name: "Paolo",
                last_name: "Rossi",
                email: "me@exemple.com"
            },
            token: "dwercfervgtrvr.tbvtverfcrewcf.recfevfgvg"
        }
        dispatch(login(result))
        navigate("/dashboard")
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={form.password} onInput={handleInput} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
export default Login