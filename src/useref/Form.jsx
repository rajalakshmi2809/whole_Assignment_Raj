import { useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
  e.preventDefault();

  const name = nameRef.current.value;   
  const message = messageRef.current.value;

  console.log("Name:", name);
  console.log("Message:", message);

  nameRef.current.value = "";
  messageRef.current.value = "";
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Name:</label>
          <input type="text" ref={nameRef} className="bg-green-400 font-bold" />
        </div>

        <div>
          <label >Message:</label>
          <textarea ref={messageRef} className="bg-green-400 font-bold h-5"></textarea>
        </div>

        <button type="submit" className="rounded-2xl p-2 bg-amber-300">Submit</button>
      </form>
    </>
  );
};

export default Form