import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
import useCartItemsStore from "../../store";

type BillingData = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phoneNumber: number;
  email: string;
};

const Checkout = () => {
  const cartItems = useCartItemsStore((s) => s.cart);
  const schema: ZodType<BillingData> = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    street: z.string().min(3),
    city: z.string().min(3),
    phoneNumber: z.number().min(10).max(10),
    email: z.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<BillingData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: BillingData) => {
    alert("order put");
  };
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <h2 className="py-3 text-lg font-semibold">Billing details</h2>
      <div className="flex flex-col gap-2 w-1/2">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name: </label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("firstName")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("lastName")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street">Street address:</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("street")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">Town/city:</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("city")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone number:</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="number"
              {...register("phoneNumber")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email address</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="email"
              {...register("email")}
            />
          </div>
          <input
            className="cursor-pointer bg-red-600 text-white w-[50%] p-2 rounded-md self-center"
            type="submit"
            value={`Place order for $${cartItems.reduce(
              (acc, item) => acc + item.quantity * item.product.price,
              0
            )}`}
            disabled={!isDirty || !isValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
