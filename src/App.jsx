import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/dashboard/Home"
import PublicLayout from "./Layouts/PublicLayout"
import { useSelector } from "react-redux"
import PrivateLayout from "./Layouts/PrivateLayout"

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth)

  if (token == null) {
    return <Navigate to="/" />
  }
  return children;
}
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
