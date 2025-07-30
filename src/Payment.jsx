import { useGlobalContext } from "./AppContext";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const Payment = () => {
  const {
    addedItems,
    removeItemHandler,
    increaseNumberItem,
    decreaseNumberItem,
  } = useGlobalContext();
  const summary = addedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const summaryDiscount = addedItems.reduce(
    (sum, item) => sum + item.discount,
    0
  );

  return (
    <div className="payment">
      <ul className="payment-items">
        {addedItems.map((item) => {
          const { id, label, discount, price, count } = item;
          return (
            <li key={id} className="payment-item">
              <h6>{label}</h6>
              <div className="payment-item-info">
                <span style={{ textDecoration: "line-through" }}>
                  {discount > 0 ? price : ""}
                </span>

                <span>{price - discount}</span>
                <span>{count}</span>
                <button type="button" onClick={() => increaseNumberItem(id)}>
                  <FaPlus />
                </button>
                <button type="button" onClick={() => decreaseNumberItem(id)}>
                  <FaMinus />
                </button>
                <button type="button" onClick={() => removeItemHandler(id)}>
                  <FaTimes />
                </button>
              </div>
            </li>
          );
        })}
        <br />
        <li className="payment-item">
          <h6>Tổng cộng</h6>
          <div className="payment-item-info">
            <span style={{ opacity: 0 }}></span>
            <span>{summary - summaryDiscount}</span>
            <button style={{ opacity: 0 }}>
              <FaTimes />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Payment;
