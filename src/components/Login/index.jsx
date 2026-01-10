import GoogleLoginButton from "./components/GoogleLoginButton";
import HeaderLogin from "./components/HeaderLogin";

const Login = () => {
  return (
    <div className="w-[600px] max-w-[95%] border border-gray-500 rounded-lg p-4 flex flex-col justify-center items-center gap-6">
      <HeaderLogin />
      <p className="text-center">
        Faça seu login para ter acesso a plataforma.
      </p>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
