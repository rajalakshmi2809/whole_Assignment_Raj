import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"



const LanguageData = () => {

    const {lang,setLanguage} = useContext(LanguageContext);

    const handleclick =()=>{
        setLanguage(lang === "en" ? "ta":"en")
    }
  return (
    <>
    <div className="bg-amber-300 p-4 w-60 h-30 justify-center items-center ml-150 mt-5 text-center ">
        <h1 className="font-bold">Task 2</h1>
    <h1>{lang === "en" ? "hello":"vanakkam"}</h1>
    <button onClick={handleclick} className="rounded-2xl bg-green-400 p-2">click language</button>
    </div>
    
    </>
  )
}

export default LanguageData
