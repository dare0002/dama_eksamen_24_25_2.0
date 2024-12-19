import TicketCardInfo from "./components/TicketCardInfo";


const Tickets = () => {
    return ( 
        <div className="md:mb-20 mb-10">
            <h3 className="md:text-offwhite text-xl md:text-3xl max-w-xl md:max-w-3xl mx-auto md:mx-auto px-6 py-8 md:py-10">Tickets.</h3>
            <TicketCardInfo />
        </div>
     );
}
 
export default Tickets;