const Button = ({ children, background }) => {
    return ( 
        <button className={`border border-offwhite text-offwhite py-2 px-6 text-lg hover:bg-pink hidden md:block 
            ${background ? "bg-offwhite text-black" : "bg-transparent"
                
            }`}
            >
                {children}
        </button>
     );
}
 
export default Button;