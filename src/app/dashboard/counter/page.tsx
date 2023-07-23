import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Counter Page",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in cart</span>
      <CartCounter value={20} />
    </div>
  );
}
