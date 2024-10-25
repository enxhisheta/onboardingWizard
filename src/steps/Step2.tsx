import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (editing && cv?.experience) {
      setExperience(cv.experience);
    }
  }, [cv, editing]);

  const handleNext = () => {
    const updatedCV = { ...cv, experience };
    localStorage.setItem("cv", JSON.stringify(updatedCV));
    navigate("/step3", { state: { cv: updatedCV } });
  };

  return (
    <div>
      <h2>Step 2: Experience</h2>
      <FormStep onSubmit={handleNext}>
        <label>
          Experience:
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
      </FormStep>
    </div>
  );
};

export default Step2;
