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
    <div className=" bg-amber-300 p-50 justify-center w-80 flex  flex-col  h-50  ">
      <h1>Usecontext practise</h1>
      <h1>Name: {data.Name}</h1>
      <h1>Age: {data.Age}</h1>

      <button onClick={dataclickone}>change name</button>
      <button onClick={dataclicktwo}>change age</button>
      </div>
    </>
  )
}

export default Datas