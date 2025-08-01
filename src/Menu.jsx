import { useGlobalContext } from "./AppContext";
import {
  foods,
  beverages,
  combo,
  getDishPrice,
  getComboPrice,
  defaultFood,
  defaultCombo,
} from "./data";

const menuTypes = [
  { id: 1, label: "món đơn" },
  { id: 2, label: "combo" },
];

const Menu = () => {
  const { type, setType, dish, setDish, addItemHandler } = useGlobalContext();
  const onChangeType = (e) => {
    setType(e.target.value);
    setDish(e.target.value == 1 ? defaultFood : defaultCombo);
  };
  return (
    <section className="menu">
      <div className="menu-type">
        {menuTypes.map((menuType) => {
          const { id, label } = menuType;
          return (
            <label key={id}>
              <input
                type="radio"
                name="menu"
                value={id}
                defaultChecked={id == type}
                onChange={onChangeType}
              />
              {label}
            </label>
          );
        })}
      </div>
      <select
        className="type-select"
        name="item"
        id="item"
        defaultValue={dish}
        onChange={(e) => setDish(e.target.value)}
      >
        {type == 1 && (
          <>
            <optgroup label="Đồ ăn">
              {foods.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                );
              })}
            </optgroup>
            <optgroup label="Nước uống">
              {beverages.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                );
              })}
            </optgroup>
          </>
        )}

        {type == 2 &&
          combo.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            );
          })}
      </select>
      <button
        onClick={() =>
          addItemHandler(
            dish,
            type,
            type == 1 ? getDishPrice(dish) : getComboPrice(dish)
          )
        }
        className="add-btn"
      >
        Thêm
      </button>
    </section>
  );
};
export default Menu;
