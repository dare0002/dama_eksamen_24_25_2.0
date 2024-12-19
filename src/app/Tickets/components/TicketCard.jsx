import Link from "next/link";
import Image from "next/image";
// import ButtonTicket from "./ButtonTicket";

const TicketCard = ({ type, price, bgColor, link }) => {
    return ( 
                <div className= {`w-full text-center ${bgColor} flex flex-col justify-between h-full`}>
                    <div className="mt-10 p-4 text-2xl ">
                        <h4>{type}</h4>
                    </div>
                    <div className="p-4 text-xl">
                        <h4>{price} DKK</h4>
                    </div>
                    <div className="mt-10 p-4 flex justify-center">
                        <Link href={link || "/"}>
                            {/* <ButtonTicket background={true}/> */}
                         
                        </Link>
                    </div>
                    <div className="mt-10 px-6 p-4 bg-offwhite w-full">
                        <Image src="/barcode1.svg" alt="Barcode image"
                            width={2000}
                            height={2000}/>
                    </div>
                </div>
     );
}
 
export default TicketCard;