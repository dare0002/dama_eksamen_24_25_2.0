"use client";

import { actionSubmitForm } from "@/actionSubmitForm";
import { useActionState } from "react";
import { useState, useEffect } from "react";
import InformationButton from "./InformationButton";

function Information() {
  const [state, formAction] = useActionState(actionSubmitForm);

  // State for form data
  const [formData, setFormData] = useState({
    name: state?.name || "",
    email: state?.email || "",
    telephone: state?.telephone || "",
    addressLine1: state?.addressLine1 || "",
    addressLine2: state?.addressLine2 || "",
    addressTown: state?.addressTown || "",
    addressPostcode: state?.addressPostcode || "",
  });

  // State for client-side errors
  const [errors, setErrors] = useState({});

  // State to track form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Full name is required";
    else if (formData.name.length === 1)
      newErrors.name = "Does your name really have only one character?";

    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Email is invalid";

    if (!formData.telephone) newErrors.telephone = "Phone number is required";

    if (!formData.addressLine1) newErrors.addressLine1 = "Address is required";

    if (!formData.addressTown)
      newErrors.addressTown = "Town or city is required";

    if (!formData.addressPostcode)
      newErrors.addressPostcode = "Zip code is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  // Validate form whenever formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    validateForm(); // Ensure the form is validated before submission
    if (!isFormValid) {
      e.preventDefault(); // Prevent form submission if invalid
      alert("Please fix the errors before submitting the form.");
    }
  };

  return (
    <section>
      <form
        action={formAction}
        noValidate
        onSubmit={handleSubmit} // Attach the handler here
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
              value={formData.name}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.name}</p>
          </div>

          <div className="form group grid gap-2 mb-6">
            <label htmlFor="email" className="text-gray-800">
              Email address*
            </label>
            <input
              className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.email}</p>
          </div>

          <div className="form group grid gap-2 mb-6">
            <label htmlFor="telephone" className="text-gray-800">
              Phone number*
            </label>
            <input
              className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
              id="telephone"
              name="telephone"
              type="tel"
              onChange={handleChange}
              value={formData.telephone}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.telephone}</p>
          </div>
        </fieldset>

        {/* Address fields */}
        <fieldset className="border-0 p-0 my-8 text-left">
          <legend className="text-xl font-semibold mb-4">
            What is your address?
          </legend>

          <div className="form group grid gap-2 mb-6">
            <label htmlFor="address-line-1" className="text-gray-800">
              Building and street*
            </label>
            <input
              className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
              id="address-line-1"
              name="addressLine1"
              type="text"
              onChange={handleChange}
              value={formData.addressLine1}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.addressLine1}</p>
          </div>

          <div className="form group grid gap-2 mb-6">
            <label htmlFor="address-line-2" className="visually-hidden">
              Address line 2 (optional)
            </label>
            <input
              className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
              id="address-line-2"
              name="addressLine2"
              type="text"
              onChange={handleChange}
              value={formData.addressLine2}
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
              onChange={handleChange}
              value={formData.addressTown}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.addressTown}</p>
          </div>

          <div className="form group grid gap-2 mb-6">
            <label htmlFor="address-postcode" className="text-gray-800">
              Zip code*
            </label>
            <input
              className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
              id="address-postcode"
              name="addressPostcode"
              type="text"
              onChange={handleChange}
              value={formData.addressPostcode}
              required
            />
            <p className="bg-red-100 text-red-950">{errors.addressPostcode}</p>
          </div>
        </fieldset>

        <InformationButton
          btnText="Next"
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-4 px-6 ${
            isFormValid
              ? "bg-black text-white hover:bg-green-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        />
        <p>{state?.message}</p>
      </form>
    </section>
  );
}

export default Information;

// import { actionSubmitForm } from "@/actionSubmitForm";
//  import CheckoutButton from "./CheckoutButton";
// import { useActionState } from "react";
// import { useState } from "react";
// import { useFormStatus } from "react-dom";

// import { IoClose } from "react-icons/io5";
// import { IoRemove } from "react-icons/io5";

// function Information(index, item) {
//   const [state, formAction] = useActionState(actionSubmitForm);
//   const [isOpen, setIsOpen] = useState(1);

//   const { pending } = useFormStatus();

//   return (
//     <>
//       {/* <header>
//         <button
//           onClick={() => {
//             isOpen === item ? setIsOpen(1) : setIsOpen(item);
//           }}
//           className="flex items-center justify-between w-full text-left font-semibold py-2"
//         >
//           <div className="flex items-center">
//             <span className="text-black">{`Ticket 1`}</span>
//           </div>

//           <span>
//             {isOpen === item ? (
//               <IoClose className=" text-black" />
//             ) : (
//               <IoRemove className="text-2xl text-black" />
//             )}
//           </span>
//         </button>
//       </header> */}
//       {/* {isOpen === item && ( */}
//       <section>
//         {/* {item === index && ( */}
//         <form
//           action={formAction}
//           noValidate
//           className="max-w-2xl mx-auto p-6 bg-offwhite rounded-lg shadow-md"
//         >
//           <fieldset className="border-0 p-0 my-8 text-left">
//             <legend className="text-xl font-semibold mb-4 text-gray-800">
//               Personal information
//             </legend>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="full-name" className="text-black">
//                 Full name*
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="full-name"
//                 name="full-name"
//                 type="text"
//                 autoComplete="name"
//                 spellCheck="false"
//                 defaultValue={state?.name}
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors?.["full-name"]}
//               </p>
//             </div>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="email" className="text-gray-800">
//                 Email address*
//                 <span className="text-sm text-gray-500 block">
//                   We will only use this to send you a receipt
//                 </span>
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="email"
//                 name="email"
//                 type="email"
//                 aria-describedby="email-hint"
//                 autoComplete="email"
//                 spellCheck="false"
//                 defaultValue={state?.email}
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.email}
//               </p>
//             </div>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="telephone-number" className="text-gray-800">
//                 Phone number*
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="telephone-number"
//                 name="telephone-number"
//                 type="tel"
//                 autoComplete="tel"
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.number}
//               </p>
//             </div>
//           </fieldset>

//           <fieldset className="border-0 p-0 my-8 text-left">
//             <legend className="text-xl font-semibold mb-4">
//               What is your address?
//             </legend>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="address-line-1" className="text-gray-800">
//                 Building and street*
//                 <span className="visually-hidden"></span>
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="address-line-1"
//                 name="addressLine1"
//                 type="text"
//                 autoComplete="address-line1"
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.address}
//               </p>
//             </div>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="address-line-2" className="visually-hidden">
//                 <span className="visually-hidden">
//                   Address line 2 (optional)
//                 </span>
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="address-line-2"
//                 name="addressLine2"
//                 type="text"
//                 autoComplete="address-line2"
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.address}
//               </p>
//             </div>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="address-town" className="text-gray-800">
//                 Town or city*
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="address-town"
//                 name="addressTown"
//                 type="text"
//                 autoComplete="address-level2"
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.address}
//               </p>
//             </div>

//             <div className="form group grid gap-2 mb-6">
//               <label htmlFor="postal-code" className="text-gray-800">
//                 Zip code*
//               </label>
//               <input
//                 className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
//                 id="address-postcode"
//                 name="addressPostcode"
//                 type="text"
//                 autoComplete="postal-code"
//                 required
//               />
//               <p className="bg-red-100 text-red-950">
//                 {state?.errors && state.errors.number}
//               </p>
//             </div>
//           </fieldset>

//           <CheckoutButton btnText={"Proceed to payment"} />
//           <p>{state?.message}</p>
//         </form>
//         {/* )} */}
//       </section>
//       {/* )} */}
//     </>
//   );
// }

// export default Information;
