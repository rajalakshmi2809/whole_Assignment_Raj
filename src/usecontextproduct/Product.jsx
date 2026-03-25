import { useContext } from "react";
import { CartContext } from "../usecontextproduct/CartContext";

const Product = () => {
  const { setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Product Page</h1>
      <button onClick={handleAdd} className="rounded-2xl bg-green-400 p-3 ">Add Product</button>
    </div>
  );
};

export default Product;