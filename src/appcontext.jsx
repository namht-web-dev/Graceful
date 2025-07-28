import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [type, setType] = useState(1);
  const [dish, setDish] = useState("banhbao");
  return (
    <AppContext.Provider
      value={{ isLogin, setIsLogin, type, setType, dish, setDish }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
