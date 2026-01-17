const ProfileStep = ({ onBack }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Conte um pouco sobre você</label>
        <textarea
          rows={4}
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2"
          placeholder="Ex: Procuro entregas no período noturno..."
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-700 rounded-md py-2"
        >
          Voltar
        </button>

        <button className="flex-1 bg-green-600 rounded-md py-2 font-medium">
          Finalizar Cadastro
        </button>
      </div>
    </div>
  );
};

export default ProfileStep;
