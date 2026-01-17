const BasicInfoStep = ({ onNext }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Telefone</label>
        <input
          type="tel"
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2"
          placeholder="(11) 99999-9999"
        />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="fixedJob" />
        <label htmlFor="fixedJob">Possui trabalho fixo</label>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-md py-2 font-medium"
      >
        Continuar
      </button>
    </div>
  );
};

export default BasicInfoStep;
