import Footer from "@/component/Footer";
import HeaderSlider from "@/component/HeaderSlider";
import Homeproducts from "@/component/Homeproducts";
import Navbar from "@/component/Navbar";
import { fetchProducts } from "@/utils/actions/product.action";
import { createClient } from "@/utils/supabse/server";
import React from "react";

const allProducts = await fetchProducts();

export default async function page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div>
      <Navbar user={user} />
      <div>
        <HeaderSlider />
        <Homeproducts products={allProducts} />
      </div>
      <Footer />
    </div>
  );
}
