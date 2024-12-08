import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const TicketCard = ({ type, price, bgColor, link }) => {
    return ( 
                <div className= {`w-full text-center ${bgColor}`}>
                    <div className="mt-10 p-4 text-2xl ">
                        <h4>{type}</h4>
                    </div>
                    <div className="p-4 text-xl">
                        <h4>{price} DKK</h4>
                    </div>
                    <div className="mt-10 p-4 flex justify-center">
                        <Link href={link}>
                            <Button background={true}>BUY</Button>
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