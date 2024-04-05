import { CartItem } from "../../models/models";
import { IoAddCircleSharp, IoRemoveCircle } from "react-icons/io5";
import useCartItemsStore from "../../store";
import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const { removeFromCart, quantityHandler } = useCartItemsStore();
  return (
    <div className="card relative bg-[#9bb0c1] w-96 shadow-xl">
      <button
        className="absolute top-[20%] right-3"
        onClick={() => removeFromCart(cartItem.product.id)}
      >
        <MdDelete className="text-red-700  w-8 h-8" />
      </button>
      <div className="card-body text-sm">
        <h2 className="card-title text-sm">{cartItem.product.title}!</h2>
        <span>{cartItem.product.category}</span>
      </div>
      <div className="flex pl-5 pb-2 gap-2">
        <figure>
          <img
            className="object-contain h-20 w-20"
            src={cartItem.product.image}
            alt="Shoes"
          />
        </figure>
        <div>
          <span>{"$" + cartItem.product.price * cartItem.quantity}</span>
          <div className="card-actions justify-center p-2 flex items-center">
            <span>Quantity: {cartItem.quantity}</span>
            <IconContext.Provider value={{ size: "20px" }}>
              <button
                className="btn btn-circle"
                onClick={() =>
                  quantityHandler(cartItem.product.id, cartItem.quantity + 1)
                }
              >
                <IoAddCircleSharp />
              </button>
              <button
                className="btn btn-circle"
                disabled={cartItem.quantity === 1}
                onClick={() =>
                  quantityHandler(cartItem.product.id, cartItem.quantity - 1)
                }
              >
                <IoRemoveCircle />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
