const menuTypes = ["món đơn", "combo"];

const Menu = () => {
  return (
    <div className="menu">
      {menuTypes.map((type, index) => {
        return (
          <label key={index}>
            <input type="radio" name="menu" value={type} /> {type}
          </label>
        );
      })}
    </div>
  );
};
export default Menu;
