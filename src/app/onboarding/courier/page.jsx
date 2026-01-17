import CourierOnboardingForm from "./CourierOnboardingForm";

export default function CourierOnboardingPage() {
  return (
    <main className="min-h-screen p-4 flex items-center justify-center bg-gray-950 text-gray-100">
      <div className="w-full max-w-2xl bg-gray-900 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">Cadastro de Entregador</h1>

        <p className="text-gray-400 mb-6">
          Precisamos de algumas informações para configurar seu perfil.
        </p>

        <CourierOnboardingForm />
      </div>
    </main>
  );
}
