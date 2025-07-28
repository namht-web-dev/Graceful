import { useGlobalContext } from "./AppContext";
import { singleDish, combo, singleJuice } from "./data";

const menuTypes = [
  { id: 1, label: "món đơn" },
  { id: 2, label: "combo" },
];

const Menu = () => {
  const { type, setType, dish, setDish } = useGlobalContext();
  const onChangeType = (e) => {
    setType(e.target.value);
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
                defaultChecked={id === type}
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
        {singleDish.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </section>
  );
};
export default Menu;
