import React, { useReducer } from "react";

const initinput = {
  name: "",
  email: "",
  password: ""
};

const handlereduce = (formData, action) => {

  if (action.type === "SET_FIELD") {
    return {
      ...formData,
      [action.field]: action.value
    };
  }

  if (action.type === "RESET_FORM") {
    return initinput;
  }

  return formData;
};

const Form = () => {

  const [formData, dispatchForm] = useReducer(handlereduce, initinput);

  const handleChange = (e) => {
    dispatchForm({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value
    });

  };
return(
    <>
    <div className="bg-green-500 p-4">

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange} className="bg-red-400 p-2 ml-2 "
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange} className="bg-red-400 p-2 ml-2"
      />

      <input
        type="password"  name="password"  placeholder="Password" value={formData.password} onChange={handleChange} 
        className="bg-red-400 p-2 ml-2"/>

      <button onClick={() =>  dispatchForm({ type: "RESET_FORM" })} className="bg-amber-200 p-2 ml-2"> Reset</button>

      <h3>{formData.name}</h3>
      <p>{formData.email}</p>

    </div>
    </>
  );
};

export default Form