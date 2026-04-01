// import { useNavigate } from "react-router-dom";

// const Login = () => {

//   const navigate = useNavigate();

//   const handlechange = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div  className="bg-red-500">
//       <h1>Login page</h1>

//       <button onClick={handlechange}>
//         Click me
//       </button>
//     </div>
//   );
// };

// export default Login;
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handlechange = () => {
    navigate("/dashboard/home")   
  }

  return (
    <div className="bg-red-500 p-10">
      <h1>Login page</h1>

      <button className="bg-blue-600 p-3" onClick={handlechange}>
        Go to Dashboard page click now
      </button>
    </div>
  )
}

export default Login