import { Product } from "../../models/models";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card px-3 bg-[#9bb0c1] w-80 shadow-xl sm:hover:scale-110 sm:hover:z-10 sm:transition-transform sm:duration-200">
      <div className="card-body">
        <h2 className="card-title">{product.title}!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure>
        <img
          className="object-cover h-48 w-full"
          src={product.image}
          alt="Shoes"
        />
      </figure>
      <span>{"$" + product.price}</span>
      <div className="card-actions justify-center p-2">
        <button className="btn bg-[#51829b] border-none">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
