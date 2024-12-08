import TicketCard from "@/components/TicketCard";

const TicketCardInfo = () => {
    return ( 
        <div className="">
            <div>
                <TicketCard />
            </div>
            <div className="bg-offwhite">
                <h3>Regular Ticket</h3>
                <p> This festival ticket is perfect for festival-goers who want to experience the full festival vibe at an affordable price, with access to all standard areas and activities.</p>
                <h4>What´s included</h4>
                <ul>
                    <li>Access to the main festival area throughout all festival days.</li>
                    <li>Entry to concerts, performances, and other festival activities in standard sections.</li>
                    <li>Free access to food and beverage areas (purchases required for consumption).</li>
                    <li>Use of general facilities, such as restrooms and seating in standard zones.</li>
                </ul>
            </div>
        </div>
     );
}
 
export default TicketCardInfo;