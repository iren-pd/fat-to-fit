import * as React from "react";
import { FormProvider } from "react-hook-form";
import type { UseFormReturn, FieldValues } from "react-hook-form";

export function Form<TFieldValues extends FieldValues = FieldValues>({
  children,
  methods,
  onSubmit,
}: {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => void;
}) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}