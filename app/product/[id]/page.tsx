import ProductDetails from "@/component/ProductDetails";
import {
  fetchProductById,
  fetchProducts,
} from "@/utils/actions/product.action";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);
  //   const product = await fetchProducts(id);
  return (
    <div>
      {/* <h1>{id}</h1> */}
      <ProductDetails product={product} />
    </div>
  );
}
