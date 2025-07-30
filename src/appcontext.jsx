import { createContext, useContext, useState } from "react";
import { combo, singleDish } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [type, setType] = useState(1);
  const [addedItems, setAddedItems] = useState([]);
  const addItemHandler = (itemId, type, price) => {
    let label = "",
      discount = 0;
    if (type == 1) label = singleDish.find((item) => item.id == itemId).label;
    else {
      const pickedCombo = combo.find((item) => item.id == itemId);
      label = pickedCombo.label;
      discount = pickedCombo.discount;
    }
    let existsItem = addedItems.find((item) => item.id === itemId);
    if (existsItem) return;
    const newItem = {
      id: itemId,
      label,
      type,
      price,
      discount,
      count: 1,
    };
    setAddedItems([...addedItems, newItem]);
  };
  const removeItemHandler = (itemId) => {
    const remainItems = addedItems.filter((item) => item.id !== itemId);
    setAddedItems(remainItems);
  };
  const increaseNumberItem = (itemId) => {
    setAddedItems(
      addedItems.map((item) => {
        return item.id === itemId ? { ...item, count: item.count + 1 } : item;
      })
    );
  };
  const decreaseNumberItem = (itemId) => {
    setAddedItems(
      addedItems.map((item) => {
        return item.id === itemId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item;
      })
    );
  };
  const [dish, setDish] = useState(type == 1 ? "banhbao" : "single1");
  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        type,
        setType,
        dish,
        setDish,
        addedItems,
        addItemHandler,
        removeItemHandler,
        increaseNumberItem,
        decreaseNumberItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
