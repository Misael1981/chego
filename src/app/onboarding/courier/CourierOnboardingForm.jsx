"use client";

import { Form } from "@/components/ui/form";
import { onboardingCourierSchema } from "@/schemas/onboardingCourier-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BasicInfoStep from "./components/BasicInfoStep";
import AvailabilityStep from "./components/AvailabilityStep";
import ProfileStep from "./components/ProfileStep";
import VehicleStep from "./components/VehicleStep";

const CourierOnboardingForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(onboardingCourierSchema),
    defaultValues: {
      username: "",
      phone: "",
      fixedJob: false,
      days: [],
      periods: [],
      vehicleType: "",
      plate: "",
      model: "",
      engineCc: "",
      expectations: "",
    },
  });

  const onSubmit = (data) => {
    console.log("DADOS CONSOLIDADOS DO ONBOARDING:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 1 && <BasicInfoStep onNext={() => setStep(2)} />}
        {step === 2 && (
          <AvailabilityStep
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <VehicleStep onBack={() => setStep(2)} onNext={() => setStep(4)} />
        )}
        {step === 4 && <ProfileStep onBack={() => setStep(3)} />}
      </form>
    </Form>
  );
};

export default CourierOnboardingForm;
