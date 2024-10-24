import { useNavigate } from "react-router-dom";

interface NavigationProps {
  nextStep: string;
  prevStep?: string;
}

const Navigation = ({ nextStep, prevStep }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      {prevStep && <button onClick={() => navigate(prevStep)}>Back</button>}
      <button onClick={() => navigate(nextStep)}>Next</button>
    </div>
  );
};

export default Navigation;
