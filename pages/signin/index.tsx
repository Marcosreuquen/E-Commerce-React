import { LoginForm } from "components/loginForm";
import { Signout } from "components/logout";
import { useTokenValue } from "hooks";
import type { NextPage } from "next";

const Signin: NextPage = () => {
  const token = useTokenValue();

  return (
    <div style={{ paddingTop: 84 }}>{!token ? <LoginForm /> : <Signout />}</div>
  );
};

export default Signin;
