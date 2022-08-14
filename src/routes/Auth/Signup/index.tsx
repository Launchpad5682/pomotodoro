import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlatButton } from "../../../components";
import { useAuthProvider } from "../../../context/auth-context";
import * as Common from "../../../styles/common";
import * as Styled from "../styles";

export const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { signup, loading, token } = useAuthProvider();
  const navigate = useNavigate();

  const signupHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    const { email, password, username } = form;
    signup(email, password, username);
    setForm({
      email: "",
      password: "",
      username: "",
    });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    if (id === "email") {
      setForm((prev) => ({ ...prev, email: event.target.value }));
    } else if (id === "password") {
      setForm((prev) => ({ ...prev, password: event.target.value }));
    } else if (id === "username") {
      setForm((prev) => ({ ...prev, username: event.target.value }));
    }
  };
  return (
    <Styled.CenterScreen>
      <Common.Form onSubmit={signupHandler}>
        <Common.InputWrapper>
          <Common.LabelText>Username</Common.LabelText>
          <Common.InputField
            id="username"
            type="text"
            autoComplete="off"
            required
            value={form.username}
            onChange={changeHandler}
          />
        </Common.InputWrapper>
        <Common.InputWrapper>
          <Common.LabelText>Email</Common.LabelText>
          <Common.InputField
            id="email"
            type="email"
            autoComplete="off"
            required
            value={form.email}
            onChange={changeHandler}
          />
        </Common.InputWrapper>
        <Common.InputWrapper>
          <Common.LabelText>Password</Common.LabelText>
          <Common.InputField
            id="password"
            type="password"
            autoComplete="off"
            required
            value={form.password}
            onChange={changeHandler}
          />
        </Common.InputWrapper>
        <FlatButton disabled={loading}>
          {loading ? "Signing up...." : "Sign Up"}
        </FlatButton>
        <Styled.StyledNavLink to="/login">
          Already have an account? Login
        </Styled.StyledNavLink>
      </Common.Form>
    </Styled.CenterScreen>
  );
};
