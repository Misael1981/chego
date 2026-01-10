import Image from "next/image";

const HeaderLogin = () => {
  return (
    <header className="flex gap-4 items-center w-full">
      <div className="bg-white p-1 rounded-lg">
        <Image src="/logo-chego.svg" width={64} height={64} alt="logo" />
      </div>
      <div>
        <h1 className="font-kanit text-2xl font-bold italic">Chegô!</h1>
        <p className="text-gray-500 text-base">
          Conectando quem vende a quem entrega.
        </p>
      </div>
    </header>
  );
};

export default HeaderLogin;
