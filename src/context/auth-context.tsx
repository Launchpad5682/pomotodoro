import axios from "axios";
import { useState, ReactNode } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext<any>(null);
export const useAuthProvider = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login") as any);
  const localStorageUser = JSON.parse(localStorage.getItem("user") as any);
  const [user, setUser] = useState(localStorageUser?.user);
  const [token, setToken] = useState(localStorageToken?.token);
  const [loading, setLoading] = useState(false);

  const login = async (
    email = "launchpad5682@gmail.com",
    password = "qwerty1234"
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const {
          data: { body },
        } = response;
        const { userData, token } = body;
        setToken(token);
        setUser(userData.username);
        localStorage.setItem("login", JSON.stringify({ token }));
        localStorage.setItem("user", JSON.stringify({ user: userData }));
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, username: string) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/signup`,
        {
          email,
          password,
          username,
        }
      );
      if (response.status === 201) {
        const {
          data: { body },
        } = response;
        const { userData, token } = body;
        localStorage.setItem("login", JSON.stringify({ token }));
        setToken(token);
        localStorage.setItem("user", JSON.stringify({ user: userData }));
        setUser(userData);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error in login user", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
