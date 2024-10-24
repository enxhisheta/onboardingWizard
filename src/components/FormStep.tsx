import { ReactNode } from "react";

interface FormStepProps {
  children: ReactNode;
  onSubmit: () => void;
}

const FormStep = ({ children, onSubmit }: FormStepProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
      <button type="submit">Next</button>
    </form>
  );
};

export default FormStep;
