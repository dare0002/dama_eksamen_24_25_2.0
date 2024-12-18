"use client"

import { actionSubmitForm } from "@/actionSubmitForm";
import Button from "./Button";
import { useActionState } from "react";

function Information () {
    const [state, formAction] = useActionState(actionSubmitForm);

    return ( 
            <form action={formAction} noValidate className="max-w-2xl mx-auto p-6 bg-offwhite rounded-lg shadow-md" >
                <fieldset className="border-0 p-0 my-8 text-left">
                    <legend className="text-xl font-semibold mb-4 text-gray-800">Personal information</legend>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="full-name" className="text-black">Full name*</label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        spellCheck="false"
                        defaultValue={state?.name}
                        required />
                        <p className="bg-red-100 text-red-950">
                        {state?.errors?.['full-name']}
                        </p>
                    </div>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="email" className="text-gray-800">Email address*
                        <span className="text-sm text-gray-500 block">We will only use this to send you a receipt</span>
                        </label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="email"
                        name="email"
                        type="email"
                        aria-describedby="email-hint"
                        autoComplete="email"
                        spellCheck="false"
                        defaultValue={state?.email}
                        required/>
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.email}
                        </p>
                    </div>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="telephone-number" className="text-gray-800">Phone number*</label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="telephone"
                        name="telephone"
                        type="tel"
                        autoComplete="tel"
                        required/>
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.number}
                        </p>
                    </div>
                </fieldset>

                <fieldset className="border-0 p-0 my-8 text-left">
                    <legend className="text-xl font-semibold mb-4">What is your address?</legend>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="address-line-1" className="text-gray-800">Building and street*
                            <span className="visually-hidden"></span>
                        </label> 
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="address-line-1"
                        name="addressLine1"
                        type="text"
                        autoComplete="address-line1"
                        required/>
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.address}
                        </p>
                    </div>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="address-line-2" className="visually-hidden">
                            <span className="visually-hidden">Address line 2 (optional)</span>
                        </label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="address-line-2"
                        name="addressLine2"
                        type="text"
                        autoComplete="address-line2"
                        required />
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.address}
                        </p>
                    </div>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="address-town" className="text-gray-800">Town or city*</label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="address-town"
                        name="addressTown"
                        type="text"
                        autoComplete="address-level2"
                        required />
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.address}
                        </p>
                    </div>

                    <div className="form group grid gap-2 mb-6">
                        <label htmlFor="postal-code" className="text-gray-800">Zip code*</label>
                        <input className="border bg-offwhite p-2 rounded-md focus:ring2 focus:ring-pink outline-none"
                        id="address-postcode"
                        name="addressPostcode"
                        type="text"
                        autoComplete="postal-code"
                        required />
                        <p className="bg-red-100 text-red-950">
                        {state?.errors && state.errors.number}
                        </p>
                    </div>
                </fieldset>
            <Button></Button>
            <p>{state?.message}</p>
            </form>
     );
}
 
export default Information;