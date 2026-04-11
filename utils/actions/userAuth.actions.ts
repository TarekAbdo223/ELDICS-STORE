"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabse/server";
import { emailValidationSchema } from "../zodvalidations/form-validations";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const emailValidation = emailValidationSchema.safeParse({ email: email });
  if (!emailValidation.success) {
    console.log("Invalid email address");
    return;
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
    },
  });
  if (error) {
    console.log("Got error signing in", error);
    revalidatePath("/");
    return { error: error.message };
  }
}
export async function verifyToken(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const token = formData.get("token") as string;

  const emailValidation = emailValidationSchema.safeParse({ email: email });
  if (!emailValidation.success) {
    console.log("Invalid email address");
    return;
  }

  const {
    error,
    data: { session },
  } = await supabase.auth.verifyOtp({
    email: email,
    token: token.trim(),
    type: "email",
  });
  if (error) {
    console.log("Got error signing in", error);

    return { error: error.message, session: null };
  }
  console.log("User session:", session);

  return { error: null, session: session };
}
