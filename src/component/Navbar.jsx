import { Link } from "react-router-dom"


const Navbar = () => {

  return (
    <>
    <div>
    <div>

    </div>
    <div className="bg-black text-white p-5 flex justify-center gap-5  ">
      {/* <h1>All Assignement</h1> */}
      <Link to ="/">All assignment</Link>
      {/* <Link to ="/createphase">Create phase</Link>
       <Link to ="/updatephase">Update phase</Link> */}
    </div>
    
    </div>
    </>
  )
}

export default Navbar