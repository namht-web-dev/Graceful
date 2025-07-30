import { useEffect, useState } from "react";
import { useGlobalContext } from "./AppContext";
import { combo, singleDish } from "./data";

const PickedItems = () => {
  const { type, dish } = useGlobalContext();
  const [picked, setPicked] = useState([]);
  const itemPicked = (type == 1 ? singleDish : combo).find(
    (item) => item.id === dish
  );
  let label = itemPicked.label;
  useEffect(() => {
    if (type == 1) setPicked([itemPicked]);
    if (type == 2) {
      const { dishes } = itemPicked;
      label = itemPicked.label;
      const pickedDish = singleDish.filter((item) => dishes.includes(item.id));
      setPicked(pickedDish);
    }
  }, [type, dish]);

  return (
    <div className="picked-items">
      <h4>{label}</h4>
      <div
        style={{
          gridTemplateColumns: picked.length > 1 ? "1fr 1fr" : "1fr",
        }}
        className="picked-item-images"
      >
        {picked.map((pick, index) => {
          const { id, image, label, price } = pick;
          return (
            <div
              className={`items ${
                picked.length === 3 && index == 2 ? "center-last-item" : ""
              }`}
              key={id}
            >
              <img src={image} alt={label} />
              <span>{price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PickedItems;
