import Button from "./Button";

const TicketCard = () => {
    return ( 
        <section className= "flex justify-center align-center content-center min-h-screen container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-6">
                <div className="bg-pink" >
                    <div className="p-4">
                        <h4>REGULAR</h4>
                    </div>
                    <div className="p-4">
                        <h4>799 DKK</h4>
                    </div>
                    <div className="p-4">
                        <Button background={true}>BUY</Button>
                    </div>
                    <div className="mt-2">
                        {/* IMAGE */}
                    </div>
                </div>
                <div className="bg-orange">
                    <div className="p-4">
                        <h4>VIP</h4>
                    </div>
                    <div className="p-4">
                        <h4>1299 DKK</h4>
                    </div>
                    <div className="p-4">
                        <Button background={true}>BUY</Button>
                    </div>
                    <div className="mt-2">
                        {/* IMAGE */}
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default TicketCard;