import HeaderSlider from "@/component/HeaderSlider";
import Homeproducts from "@/component/Homeproducts";
import Navbar from "@/component/Navbar";
import { fetchProducts } from "@/utils/actions/product.action";
import React from "react";

const allProducts = await fetchProducts();
console.log(allProducts);
function page() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
        <Homeproducts products={allProducts} />
      </div>
    </div>
  );
}

export default page;
