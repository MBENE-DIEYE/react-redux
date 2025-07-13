import { useSelector } from "react-redux"
import Navbar from "../../components/dashboard/navbar"

const Home = () => {
    const { user, token } = useSelector((state) => state.auth)
    return (
        <>
            <Navbar />
            <h1>Benvenuto, {user.first_name}</h1>
            <p>Questo è il tuo toke di autenticazione: {token}</p>
        </>
    )
}
export default Home