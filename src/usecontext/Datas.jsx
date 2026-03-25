// 


import { useContext } from "react"
import { Userscontext } from "./Userscontext"

const Datas = () => {

  const { data, setData } = useContext(Userscontext)

  const dataclickone = () => {
    setData(prev => ({
      ...prev,
      Name: "Lakshmi"
    }))
  }

  const dataclicktwo = () => {
    setData(prev => ({
      ...prev,
      Age: 18
    }))
  }

  return (
    <>
    <div className="bg-green-400 p-10 w-100 h-100 text-2xl justify-center ml-150 mb-4 rounded-3xl ">
      <h1 className="font-bold">Usecontext practise</h1>
      <h1>Name: {data.Name}</h1>
      <h1>Age: {data.Age}</h1>

      <button onClick={dataclickone} className="rounded-2xl bg-yellow-300 p-3 w-50 mb-6">change name</button>
      <button onClick={dataclicktwo} className="rounded-2xl bg-yellow-300 p-3 w-50">change age</button>
      </div>
    </>
  )
}

export default Datas