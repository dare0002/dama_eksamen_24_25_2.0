"use server";

import { getData, postData } from "@/lib/apiforms";
import { revalidatePath } from "next/cache";

export async function actionSubmitForm(prev, formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    addressLine1: formData.get("addressLine1"),
    addressLine2: formData.get("addressLine2"),
    addressTown: formData.get("addressTown"),
    addressPostcode: formData.get("addressPostcode"),
  };

  //   NAME LENGTH IS MISSING

  const errors = {};
  if (!data.name) {
    errors.name = "Full name is required";
  } else if (data.name.length === 1) {
    errors.name = "Does your name really have only one character?";
  }

  if (!data.email || !data.email.includes("@")) {
    errors.email = "Email is invalid";
  }
  if (!data.telephone) {
    errors.telephone = "Phone number is required";
  }
  if (!data.addressLine1) {
    errors.addressLine1 = "Address is required";
  }
  if (!data.addressTown) {
    errors.addressTown = "Town or city is required";
  }
  if (!data.addressPostcode) {
    errors.addressPostcode = "Zip code is required";
  }

  // if (Object.keys(errors).length > 0) {
  //   return {
  //     success: false,
  //     errors,
  //     message: "Please fill in all errors above.",
  //   };
  // }

  const existingData = await getData();
  const existingEntry = existingData.find(
    (entry) => entry.email === data.email
  );

  if (existingEntry) {
    return {
      success: false,
      errors: { email: "Email already exists" },
      name: data.name,
      email: data.email,
      telephone: data.telephone,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      addressTown: data.addressTown,
      addressPostcode: data.addressPostcode,
    };
  }

  //   Skickas vidare till databas i supabase där information lagras

  const result = await postData(data);

  if (result) {
    revalidatePath("/");
    return { success: true, message: "Your information is being handled" };
  }

  return { success: false, message: "Submission failed." };
}

// "use server";

// import { getData, postData } from "@/lib/apiforms";
// import { revalidatePath } from "next/cache";

// export async function actionSubmitForm(prev, formData) {
//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     telephone: formData.get("telephone"),
//     addressLine1: formData.get("addressLine1"),
//     addressLine2: formData.get("addressLine2"),
//     addressTown: formData.get("addressTown"),
//     addressPostcode: formData.get("addressPostcode"),
//   };

//   //   NAME LENGTH IS MISSING

//   const errors = {};
//   if (!data.name) {
//     errors.name = "Name is required";
//   }
//   if (data.name.length === 1) {
//     errors.name = "Does your name really have only one character?";
//   }
//   if (!data.email || !data.email.includes("@")) {
//     errors.email = "Email is invalid";
//   }
//   if (!data.telephone) {
//     errors.telephone = "Phone number is required";
//   }
//   if (!data.addressLine1) {
//     errors.addressLine1 = "Address is required";
//   }
//   if (!data.addressTown) {
//     errors.addressTown = "Town or city is required";
//   }
//   if (!data.addressPostcode) {
//     errors.addressPostcode = "Zip code is required";
//   }

//   if (Object.keys(errors).length > 0) {
//     return {
//       success: false,
//       errors,
//       message: "Please fill in all errors above.",
//     };
//   }

//   const existingData = await getData();

//   const existingEntry = existingData.find(
//     (entry) => entry.email === data.email
//   );

//   if (existingEntry) {
//     return {
//       success: false,
//       errors: { email: "Email already exists" },
//       name: data.name,
//       email: data.email,
//       telephone: data.telephone,
//       addressLine1: data.addressLine1,
//       addressLine2: data.addressLine2,
//       addressTown: data.addressTown,
//       addressPostcode: data.addressPostcode,
//     };
//   }

//   //   Skickas vidare till databas i supabase där information lagras

//   const result = await postData(data);

//   if (result) {
//     revalidatePath("/");
//     return { success: true, message: "Your information is being handled" };
//   }

//   return { success: false, message: "Submission failed." };
// }
