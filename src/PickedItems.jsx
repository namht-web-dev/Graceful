import { useGlobalContext } from "./AppContext";
import { singleDish } from "./data";

const PickedItems = () => {
  const { dish } = useGlobalContext();
  const { image, label } = singleDish.filter((item) => item.id === dish)[0];
  console.log(image, label);
  return (
    <div className="picked-items">
      <div className="picked-item-images">
        <img src={image} alt={label} />
      </div>
    </div>
  );
};
export default PickedItems;
