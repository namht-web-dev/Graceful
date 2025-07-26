import Menu from "./Menu";
import Payment from "./Payment";
import PickedItems from "./PickedItems";

const CenterContainer = () => {
  return (
    <section className="center-container">
      <Menu />
      <PickedItems />
      <Payment />
    </section>
  );
};
export default CenterContainer;
