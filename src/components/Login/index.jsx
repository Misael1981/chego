import { Button } from "../ui/button";
import HeaderLogin from "./components/HeaderLogin";

const Login = () => {
  return (
    <>
      <HeaderLogin />
      <p>Faça seu login para ter acesso a plataforma.</p>
      <Button>Entrar com Google</Button>
    </>
  );
};

export default Login;
