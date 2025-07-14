import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const handlealaogout = () => {
    dispatch(logout())
  }
  return (
    <>
      <div>{user.first_name} {user.last_name}</div>
      <span style={{ cursor: "pointer" }} onClick={handlealaogout}>Logout</span>
    </>

  )
}
export default Navbar