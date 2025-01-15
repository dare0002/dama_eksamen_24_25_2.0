"use client";

import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

// Hjælp af chatGPT med error handling

const Payment = () => {
  const [formData, setFormData] = useState({
    cardName:"", 
    cardNumber:"", 
    expiryDate:"", 
    cvv:"", 
  });
  
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    const validations = {
      cardName: value.trim() !=="", 
      cardNumber: /^[0-9\s]{16,19}$/.test(value.replace(/\s+/g, "")),
      expiryDate: /^(0[1-9]|1[0,2])\/\d{2}$/.test(value),
      cvv: /^[0-9]{3}$/.test(value.trim()), 
    };
    return validations[name];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev, 
      [name]: !validate(name, value), 
    }));
  };

  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== "") &&
    Object.values(errors).every((error) => !error);

  const handlePay = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill in all fields correctly.");
      return;
    }
    console.log("Payment submitted:", formData)

  };


  return (
    <section className="max-w-xl p-8 px-8 md:max-w-2xl mx-auto md:p-6">
      <h3 className="text-xl md:text-2xl mb-6">Payment.</h3>
      <form
        noValidate
        className="max-w-xl p-8 px-8 md:max-w-2xl mx-auto md:p-6 bg-offwhite shadow-md mb-20"
        onSubmit={(e) => e.preventDefault()}
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
            className={`border bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none ${
                errors.cardName ? "border-red-500" : "border-black"
              }`}
              id="cardName"
              name="cardName"
              type="text"
              placeholder="First and Last name"
              spellCheck="false"
              value={formData.cardName}
              onChange={handleInputChange}
              required
            />
            {errors.cardName && (
            <span className="text-red-400 text-sm">
              Please enter a valid name on card.
            </span>
          )}
          </div>
          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              Card Number*
            </label>
            <input
            className={`border bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none ${
                errors.cardNumber ? "border-red-500" : "border-black"
              }`}
              id="cardNumber"
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9101 3456"
              spellCheck="false"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            {errors.cardNumber && (
            <span className="text-red-400 text-sm">
              Please enter a valid 16-digit card number.
            </span>
          )}
          </div>


          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              Expiry Date (MM/YY)*
            </label>
            <input
            className={`border bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none ${
                errors.expiryDate ? "border-red-500" : "border-black"
              }`}
              id="expiryDate"
              name="expiryDate"
              type="text"
              spellCheck="false"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
            {errors.expiryDate && (
            <span className="text-red-400 text-sm">
              Please enter a valid expiry date in MM/YY format.
            </span>
          )}
          </div>


          <div className="form-group grid gap-2 mb-6">
            <label htmlFor="card-number" className="text-black">
              CVV*
            </label>
            <input
            className={`border bg-offwhite text-black p-2 rounded-md focus:ring-2 focus:ring-pink outline-none ${
                errors.cvv ? "border-red-500" : "border-black"
              }`}
              id="cvv"
              name="cvv"
              type="text"
              placeholder="cvv"
              spellCheck="false"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
            {errors.cvv && (
            <span className="text-red-500 text-sm">
              Please enter a valid 3 digit CVV.
            </span>
          )}
          </div>
        </fieldset>
        
          <Link href={isFormValid ? "/OrderConfirmation" : "#"} passHref>
          <button
            type="button"
            onClick={(e) => {
              if (!isFormValid) {
                e.preventDefault(); 
                alert("Please fill in all fields correctly.");
              }
            }}
            className={`w-full py-4 px-6 border border-solid ${
              isFormValid
                ? "bg-black text-offwhite hover:bg-green-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isFormValid} 
          >
            Pay
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Payment;



