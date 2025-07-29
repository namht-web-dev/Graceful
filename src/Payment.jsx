import { useGlobalContext } from "./AppContext";

const Payment = () => {
  const { addedItems } = useGlobalContext();
  console.log(addedItems);
  return <div className="payment">Payment</div>;
};
export default Payment;
