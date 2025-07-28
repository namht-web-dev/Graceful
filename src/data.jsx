export const singleDish = [
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
  {
    id: "linebreak",
    label: "Be",
  },
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

export const singleJuice = [
  {
    id: "eptao",
    label: "Nước ép táo",
    price: 25,
    image: "/items/eptao.png",
    type: "juice",
  },
  {
    id: "epcam",
    label: "Nước ép cam",
    price: 15,
    image: "/items/camvat.png",
    type: "juice",
  },
  {
    id: "caphesua",
    label: "Cà phê sữa",
    price: 17,
    image: "/items/coffee.png",
    type: "juice",
  },
];

export const combo = [
  {
    id: "single1",
    label: "Bữa sáng căng tròn",
    dishes: "banhbao",
    juices: "caphesua",
    discount: 2,
  },
  {
    id: "single2",
    label: "Combo huyền thoại",
    dishes: "hamburger",
    juices: "caphesua",
    discount: 2,
  },
  {
    id: "single3",
    label: "Ấm bụng ban mai",
    dishes: "chaolong",
    juices: "caphesua",
    discount: 2,
  },
  {
    id: "double1",
    label: "Dinh dưỡng lành mạnh",
    dishes: "chaolong,banhbao",
    juices: "epcam,eptao",
    discount: 5,
  },
  {
    id: "ahalf1",
    label: "Vị quê",
    dishes: "chaolong,hamburger",
    juices: "caphesua,eptao",
    discount: 7,
  },
];
