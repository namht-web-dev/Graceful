import { useGlobalContext } from "./AppContext";
import { combo, singleDish } from "./data";

const PickedItems = () => {
  const { type, dish } = useGlobalContext();
  let itemPicked, label;

  if (type == 1) itemPicked = [singleDish.find((item) => item.id === dish)];

  if (type == 2) {
    itemPicked = combo.find((item) => item.id === dish);
    const { dishes } = itemPicked;
    itemPicked = singleDish.filter((item) => dishes.includes(item.id));
  }
  label = itemPicked[0].label;

  return (
    <div className="picked-items">
      <h4>{label}</h4>
      <div
        style={{
          gridTemplateColumns: itemPicked.length > 1 ? "1fr 1fr" : "1fr",
        }}
        className="picked-item-images"
      >
        {itemPicked.map((pick, index) => {
          const { id, image, label, price } = pick;
          return (
            <div
              className={`items ${
                itemPicked.length === 3 && index == 2 ? "center-last-item" : ""
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
