import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [type, setType] = useState(1);
  const [addedItems, setAddedItems] = useState([]);
  const addItemHandler = (itemId) => {
    setAddedItems([...addedItems, itemId]);
  };
  const removeItemHandler = (itemId) => {
    const remainItems = addedItems.filter((item) => item !== itemId);
    setAddedItems(remainItems);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
