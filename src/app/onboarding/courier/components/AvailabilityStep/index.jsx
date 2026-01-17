const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const periods = ["Manhã", "Tarde", "Noite"];

const AvailabilityStep = ({ onBack, onNext }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-medium mb-2">Dias disponíveis</h2>
        <div className="grid grid-cols-2 gap-2">
          {days.map((day) => (
            <label key={day} className="flex gap-2 items-center">
              <input type="checkbox" />
              {day}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-medium mb-2">Períodos</h2>
        <div className="flex gap-4">
          {periods.map((period) => (
            <label key={period} className="flex gap-2 items-center">
              <input type="checkbox" />
              {period}
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-700 rounded-md py-2"
        >
          Voltar
        </button>

        <button
          onClick={onNext}
          className="flex-1 bg-indigo-600 rounded-md py-2"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default AvailabilityStep;
