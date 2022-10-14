import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
}

const ProductList = (props: { products: { products: any[]; } | null; }) => {
  if(props.products===null){
    return(<></>)}
  return (
    <div>
    {props.products.products.map(product =>
      <Product product={product} />
    )}
  </div>
  );
};

export default ProductList;
