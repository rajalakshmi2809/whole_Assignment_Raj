import { useNavigate } from "react-router-dom"
import Provider from "../usecontext/Provider"
import Datas from "../usecontext/Datas"
import ThemeProvider from "../usecontext/ThemeProvider"
import ToggleTheme from '../usecontext/ToggleTheme'
import LanguageData from "../usecontext/LanguageData"
import LanguageProvider from "../usecontext/LanguageProvider"
import CartProvider from "../usecontextproduct/CartProvider"
import Mainpage from "../usecontextproduct/Mainpage"



const Day14 = () => {
  const navigate = useNavigate()

  const handleclick = () => {
    navigate("/")
  }

  return (
    <>
     <div>
    <div >
      <Provider>
        <Datas />
      </Provider>
    </div>
    <div>
      <ThemeProvider>
        <ToggleTheme/>
      </ThemeProvider>
     </div>
     <div>
      <LanguageProvider>
        <LanguageData/>
      </LanguageProvider>
     </div>


     <div>
     <CartProvider>
      <Mainpage/>
     </CartProvider>

     </div>
     </div>  


<button  onClick={handleclick} className='bg-green-400 p-2 rounded-2xl'>Go to Home</button>
    </>
  )
}

export default Day14