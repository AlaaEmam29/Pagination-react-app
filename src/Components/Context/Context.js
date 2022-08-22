import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import Paginate from "../Paginate/Paginate";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchAPi = async () => {
    const url = "https://api.github.com/users?per_page=100";

    const response = await fetch(url);
    const data = await response.json();

    setData(Paginate(data));
    setLoading(false);
  };
  useEffect(() => {
    fetchAPi();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
