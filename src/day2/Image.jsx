const Image = () => {
  return (
    <>
      <div className="bg-red-400 min-h-screen p-6 flex items-center justify-center">
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
          
          <img
            src="./images/spider1.jpg"
            alt="spider1"
            className="rounded-2xl shadow-lg hover:scale-105  transition duration-300 object-cover w-full h-64"
          />

          <img
            src="./images/spider2.jpg"
            alt="spider2"
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-64"
          />

          <img
            src="./images/spider3.jpg"
            alt="spider3"
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-64"
          />

        </div>

      </div>
    </>
  );
};

export default Image;