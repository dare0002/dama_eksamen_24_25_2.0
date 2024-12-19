const Button = ({ children, background }) => {
  return (
    <button
      className={`border border-offwhite py-2 px-6 text-xl hover:bg-pink  hover:text-white
            ${background ? "bg-offwhite text-black" : "bg-transparent"}`}
    >
      {children}
    </button>
  );
};

export default Button;
