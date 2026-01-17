"use client";

import BasicInfoStep from "../BasicInfoStep";
import AvailabilityStep from "../AvailabilityStep";
import ProfileStep from "../ProfileStep";

import { useState } from "react";

const StepsRegistration = () => {
  const [step, setStep] = useState(1);
  return (
    <section>
      {step === 1 && <BasicInfoStep onNext={() => setStep(2)} />}
      {step === 2 && (
        <AvailabilityStep onBack={() => setStep(1)} onNext={() => setStep(3)} />
      )}
      {step === 3 && <ProfileStep onBack={() => setStep(2)} />}
    </section>
  );
};

export default StepsRegistration;
