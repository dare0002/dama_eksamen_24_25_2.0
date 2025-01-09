"use client";

import { actionSubmitForm } from "@/actionSubmitForm";
import { useActionState } from "react";
import { useState, useEffect } from "react";
import CheckoutButton from "./CheckoutButton";
// import { useFormStatus } from "react-dom";
// import { IoClose } from "react-icons/io5";
// import { IoRemove } from "react-icons/io5";

function Information() {
  const [state, formAction] = useActionState(actionSubmitForm);
  const [formData, setFormData] = useState({
    name: state?.name || "",
    email: state?.email || "",
    telephone: state?.telephone || "",
    addressLine1: state?.addressLine1 || "",
    addressTown: state?.addressTown || "",
    addressPostcode: state?.addressPostcode || "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
    const [reservationId, setReservationId] = useState();

  // Kontrollerer om alla fält har fyllts i korrekt här med useEffect

  useEffect(() => {
    const isValid = 
      formData.name &&
      formData.email &&
      formData.telephone &&
      formData.addressLine1 &&
      formData.addressTown &&
      formData.addressPostcode;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section>
        <form
          action={formAction}
          noValidate
          onSubmit={(e) => {
    if (!state?.success) {
      e.preventDefault(); // Hindra navigering
      alert("Please fix the errors before proceeding.");
    }
  }}
          className="max-w-2xl mx-auto p-6 bg-offwhite rounded-lg shadow-md"
        >
          <fieldset className="border-0 p-0 my-8 text-left">
            <legend className="text-xl font-semibold mb-4 text-gray-800">
              Personal information
            </legend>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="full-name" className="text-black">
                Full name*
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                spellCheck="false"
                onChange={handleChange}
                value={state?.name}
                required
              />
              <p className="bg-red-100 text-red-950">
                {/* {state?.errors?.["full-name"]} */}
                {state?.errors?.name}
              </p>
            </div>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="email" className="text-gray-800">
                Email address*
                <span className="text-sm text-gray-500 block">
                  We will only use this to send you a receipt
                </span>
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="email"
                name="email"
                type="email"
                aria-describedby="email-hint"
                autoComplete="email"
                spellCheck="false"
                onChange={handleChange}
                value={state?.email}
                required
              />
              <p className="bg-red-100 text-red-950">
                {state?.errors?.email}
                {/* {state?.errors && state.errors.email} */}
              </p>
            </div>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="telephone-number" className="text-gray-800">
                Phone number*
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
                onChange={handleChange}
                value={state?.telephone}
                required
              />
              <p className="bg-red-100 text-red-950">
                {state?.errors?.number}
              </p>
            </div>
          </fieldset>

          <fieldset className="border-0 p-0 my-8 text-left">
            <legend className="text-xl font-semibold mb-4">
              What is your address?
            </legend>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="address-line-1" className="text-gray-800">
                Building and street*
                <span className="visually-hidden"></span>
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="address-line-1"
                name="addressLine1"
                type="text"
                autoComplete="address-line1"
                onChange={handleChange}
                value={state?.addressLine1}
                required
              />
              <p className="bg-red-100 text-red-950">
                {state?.errors?.address}
              </p>
            </div>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="address-line-2" className="visually-hidden">
                <span className="visually-hidden">
                  Address line 2 (optional)
                </span>
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="address-line-2"
                name="addressLine2"
                type="text"
                autoComplete="address-line2"
                onChange={handleChange}
                value={state?.addressLine2}
              />
            </div>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="address-town" className="text-gray-800">
                Town or city*
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="address-town"
                name="addressTown"
                type="text"
                autoComplete="address-level2"
                onChange={handleChange}
                value={state?.addressTown}
                required
              />
              <p className="bg-red-100 text-red-950">
                {state?.errors?.addressTown}
              </p>
            </div>

            <div className="form group grid gap-2 mb-6">
              <label htmlFor="postal-code" className="text-gray-800">
                Zip code*
              </label>
              <input
                className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                id="address-postcode"
                name="addressPostcode"
                type="text"
                autoComplete="postal-code"
                onChange={handleChange}
                value={state?.addressPostcode}
                required
              />
              <p className="bg-red-100 text-red-950">
                {state?.errors?.addressPostcode}
              </p>
            </div>
          </fieldset>


           {/* <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-4 px-6 ${
              isFormValid
                ? "bg-black text-white hover:bg-green-700"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Proceed to payment
          </button>
           <p>{state?.message}</p> */}

           <CheckoutButton
              btnText="Proceed to payment"
               reservationId={reservationId}
              type="submit" // Viktigt om det används i ett formulär
              disabled={!isFormValid} // Styr om knappen ska vara klickbar
              className={`w-full py-4 px-6 ${
                isFormValid
                  ? "bg-black text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            />
            <p>{state?.message}</p>
        </form>
      </section>
    </>
  );
}


export default Information;
