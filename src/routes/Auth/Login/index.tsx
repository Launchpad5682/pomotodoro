import { useLogin } from "./useLogin";
import * as Common from "../../../styles/common";
import * as Styled from "../styles";
import { FlatButton } from "../../../components";

export function Login() {
  const { form, loading, loginHandler, changeHandler } = useLogin();

  return (
    <Styled.CenterScreen>
      <Common.Form onSubmit={loginHandler}>
        <Common.InputWrapper>
          <Common.LabelText>Email</Common.LabelText>
          <Common.InputField
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
            type="password"
            autoComplete="off"
            required
            value={form.password}
            onChange={changeHandler}
          />
        </Common.InputWrapper>
        <FlatButton disabled={loading}>
          {loading ? "Logging in...." : "Log In"}
        </FlatButton>
        <Styled.StyledNavLink to="/signup">
          Create an account
        </Styled.StyledNavLink>
      </Common.Form>
    </Styled.CenterScreen>
  );
}
