"use server";

import { getData, addData } from "./apiforms";
import { revalidatePath } from "next/cache";

export async function actionSubmitForm(prev, formData) {
  const data = {
    name: formData.get("full-name"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    addressLine1:formData.get("address-line1"),
    addressLine2:formData.get("address-line2"),
    addressTown:formData.get("address-town"), 
    addressPostcode:formData.get("address-postcode"),
  };

//   NAME LENGTH IS MISSING

  const errors = {};
  if (!data.name) {errors.name = "Full name is required";}
  if (!data.email || !data.email.includes("@")) {errors.email = "Email is invalid";}
  if (!data.telephone) {errors.telephone = "Phone number is required";}
  if (!data.addressLine1) {errors.addressLine1 = "Address is required";}
  if (!data.addressTown) {errors.addressTown = "Town or city is required";}
  if (!data.addressPostcode) {errors.addressPostcode = "Zip code is required";}

  if (Object.keys(errors).length > 0) {
    return { success: false, errors,
    message: "Please fill in all errors above.",
    };
  };

  const existingData = await getData();
  const existingEntry = existingData.find((entry) => entry.email === data.email);

  if (existingEntry) {
    return { success: false, errors: { email: "Email already exists" } };
  }

//   Skickas vidare till databas i supabase där information lagras

  const result = await addData(data);

  if (result) {
    revalidatePath("/");
    return { success: true, message: "Redirecting to payment" };
  }
  
  return { success: false, message: "Submission failed." };
}

