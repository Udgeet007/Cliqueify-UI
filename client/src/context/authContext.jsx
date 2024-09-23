import { createContext, useEffect, useState } from "react";

// export const DarkModeContext = createContext();

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    //TO DO
    setCurrentUser({id:1, name:"Toby Mac", profilePic:"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
  <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
