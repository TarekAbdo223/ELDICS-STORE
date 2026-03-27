"use server";

import { createClient } from "../supabse/server";

export async function fetchProducts() {
  const supabase = await createClient();
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.log(error);
    return [];
  }

  return products;
}
