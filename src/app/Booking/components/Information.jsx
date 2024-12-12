import Button from "@/components/Button";

const Information = () => {
    return ( 
            <form onSubmit="return false;" className="mb-8">
                <fieldset className="border-0 p-0 my-8 text-left">
                    <legend className="text-xl">Personal information</legend>
                    <div className="grid space-y-6">
                        <label htmlFor="full-name" className="grid md:gap-5 md:mb-5">Full name</label>
                        <input className="appearance-none border-5 border-solid border-2 bg-gray-200"
                        id="full-name"
                        name="full-name"
                        type="text"
                        autoComplete="name"
                        spellCheck="false">
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="grid md:gap-5 md:mb-5">Email address
                        <span>We will only use this to send you a receipt</span>
                        </label>
                        <input className="appearance-none border-5 border-solid border-2 bg-gray-200"
                        id="email"
                        name="email"
                        type="email"
                        aria-describedby="email-hint"
                        autoComplete="email"
                        spellCheck="false"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone-number">Phone number</label>
                        <input 
                        id="telephone-number"
                        name="telephone-number"
                        type="tel"
                        autoComplete="tel"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>What is your address?</legend>
                    <div className="form-group">
                        <label htmlFor="address-line-1">Building and street <span className="visually-hidden">line 1 of 2</span></label> 
                        <input 
                        id="address-line-1"
                        name="address-line-1"
                        type="text"
                        autoComplete="address-line1"/>
                    </div>
                    <div className="form-group address">
                        <label htmlFor="address-line-2"><span className="visually-hidden">Building and street line 2 of 2</span></label>
                        <input 
                        id="address-line-2"
                        name="address-line-2"
                        type="text"
                        autoComplete="address-line2" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address-town">Town or city</label>
                        <input 
                        id="address-postcode"
                        name="address-postcode"
                        type="text"
                        autoComplete="postal-code" />
                    </div>
                </fieldset>
            <Button background={true}>Proceed to checkout</Button>
            </form>
     );
}
 
export default Information;