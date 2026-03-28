import { useState, useRef } from "react";

const TypingTracker = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const timerRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);

    setStatus("Typing...");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setStatus("User stopped typing...");
    }, 2000);
  };

  return (
    <>
      <input className="bg-green-400 font-bold"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />

      <h2>{status}</h2>
    </>
  );
};

export default TypingTracker;