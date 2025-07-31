export const foods = [
  {
    id: "hamburger",
    label: "Bánh mì kẹp",
    price: 20,
    image: "/items/hamburger.png",
  },
  {
    id: "banhbao",
    label: "Bánh bao",
    price: 20,
    image: "/items/banhbao.png",
  },
  {
    id: "chaolong",
    label: "Cháo lòng",
    price: 20,
    image: "/items/chaolong.png",
  },
];

export const beverages = [
  {
    id: "eptao",
    label: "Nước ép táo",
    price: 25,
    image: "/items/eptao.png",
  },
  {
    id: "epcam",
    label: "Nước ép cam",
    price: 15,
    image: "/items/camvat.png",
  },
  {
    id: "caphesua",
    label: "Cà phê sữa",
    price: 17,
    image: "/items/coffee.png",
  },
];

export const combo = [
  {
    id: "single1",
    label: "Bữa sáng căng tròn",
    dishes: "banhbao,caphesua",
    discount: 2,
  },
  {
    id: "single2",
    label: "Combo huyền thoại",
    dishes: "hamburger,caphesua",
    discount: 2,
  },
  {
    id: "single3",
    label: "Ấm bụng ban mai",
    dishes: "chaolong,caphesua",
    discount: 2,
  },
  {
    id: "double1",
    label: "Dinh dưỡng lành mạnh",
    dishes: "chaolong,banhbao,epcam,eptao",
    discount: 5,
  },
  {
    id: "ahalf1",
    label: "Vị quê",
    dishes: "chaolong,hamburger,caphesua",
    discount: 7,
  },
];

export const defaultFood = foods[0].id;
export const defaultCombo = combo[0].id;

export const singleDish = [...foods, ...beverages];

export const getComboPrice = (comboId) => {
  const comboDishes = combo
    .find((item) => item.id === comboId)
    .dishes.split(",");
  const dishes = singleDish.filter((item) => comboDishes.includes(item.id));
  return dishes.reduce((a, b) => a + b.price, 0);
};

export const getDishPrice = (dishId) => {
  const dish = singleDish.find((item) => item.id === dishId);
  return dish.price;
};
