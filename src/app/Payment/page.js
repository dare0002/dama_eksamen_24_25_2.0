import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";
import Button from "@/components/Button";

const Payment = () => {
  return (
    <section className="max-w-xl p-8 px-8 md:max-w-2xl mx-auto md:p-6">
      <h3 className="text-xl md:text-2xl mb-6">Payment.</h3>
      <form
        noValidate
        className="max-w-xl p-8 px-8 md:max-w-2xl mx-auto md:p-6 bg-offwhite shadow-md mb-20"
      >
        <fieldset className="border-0 p-0 my-8 text-left">
          <legend className="text-xl font-semibold mb-4 text-black">
            {" "}
            Payment Methods
          </legend>
          <div>
            <MdOutlinePayment className="text-black w-10 h-10 mb-10" />
          </div>
          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-name" className="text-black">
              Name on card*
            </label>
            <input
              className="border border-black bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none"
              id="card-name"
              name="card-name"
              type="text"
              placeholder="First and Last name"
              spellCheck="false"
              required
            />
          </div>
          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              Card Number*
            </label>
            <input
              className="border border-black bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none"
              id="card-number"
              name="card-number"
              type="text"
              placeholder="1234 5678 9101 3456"
              spellCheck="false"
              required
            />
          </div>
          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              Expiry Date (MM/YY)*
            </label>
            <input
              className="border border-black bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none"
              id="expiry-date"
              name="expiry-date"
              type="text"
              spellCheck="false"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              CVV*
            </label>
            <input
              className="border border-black bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none"
              id="cvv"
              name="cvv"
              type="text"
              placeholder="cvv"
              spellCheck="false"
              required
            />
            <button></button>
          </div>
        </fieldset>
        <Link href="/OrderConfirmation">
        <button className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite">Pay</button>
        </Link>
      </form>
    </section>
  );
};



export default Payment;
