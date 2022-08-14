import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../../context/auth-context";

export function useLogin() {
  const [form, setForm] = useState({
    email: "launchpad5682@gmail.com",
    password: "qwerty1234",
  });

  const { login, token, loading } = useAuthProvider();
  console.log();
  const navigate = useNavigate();
  const location: any = useLocation();

  const from = location.state?.from?.pathname || "/";

  const loginHandler = (event: FormEvent) => {
    event.preventDefault();
    login(form.email, form.password);
  };

  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [navigate, token, from]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const type = event.target.type;
    if (type === "email") {
      setForm((prev) => ({ ...prev, email: event.target.value }));
    } else if (type === "password") {
      setForm((prev) => ({ ...prev, password: event.target.value }));
    }
  };
  return { form, loginHandler, changeHandler, loading };
}
