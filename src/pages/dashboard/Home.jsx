import { useSelector } from "react-redux"

const Home = () =>{
    const {user, token} = useSelector((state) => state.auth)
    return(
        <>
        <h1>Benvenuto, {user.first_name}</h1>
        <p>Questo è il tuo toke di autenticazione: {token}</p>
        </>
    )
}
export default Home