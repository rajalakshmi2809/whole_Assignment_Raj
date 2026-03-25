import { useNavigate } from "react-router-dom"
import Provider from "../usecontext/Provider"
import Datas from "../usecontext/Datas"
import ThemeProvider from "../usecontext/ThemeProvider"
import ToggleTheme from '../usecontext/ToggleTheme'

const Day14 = () => {
  const navigate = useNavigate()

  const handleclick7 = () => {
    navigate("/")
  }

  return (
    <>
    <div className="justify-center items-center">
      <Provider>
        <Datas />
      </Provider>
    </div>
    <div className=" justify-center items-center ml-19">
      <ThemeProvider>
        <ToggleTheme/>
      </ThemeProvider>
     </div> 

      <button onClick={handleclick7}>Go Home</button>
    </>
  )
}

export default Day14