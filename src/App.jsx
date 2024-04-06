import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { RoutesMain } from "./routes";
import "./styles/index.scss"
import { useContext } from "react";
import { UserContext, UserProvider } from "./providers/Usercontext";
import { LoadingPage } from "./Loading/loading";

function App() {

    const {Loading} = useContext(UserContext)
  return (
    <>
      <UserProvider>
          {Loading? <LoadingPage /> : <RoutesMain />}
          {/* <RoutesMain /> */}
          <ToastContainer />
      </UserProvider>
    </>
  )
}

export default App
