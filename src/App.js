import Login from "./Login"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Welcome from "./Welcome";

const App=()=>{
  const user= JSON.parse(localStorage.getItem("user"))
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={user? <Navigate to="/welcome" /> : <Login /> } />
    <Route path="/welcome" element={  <Welcome />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App