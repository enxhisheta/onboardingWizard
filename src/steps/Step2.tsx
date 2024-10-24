import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step2 = () => {
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cv") || "{}");
    if (savedData.experience) {
      setExperience(savedData.experience);
    }
  }, []);

  const handleNext = () => {
    const cv = JSON.parse(localStorage.getItem("cv") || "{}");
    cv.experience = experience;
    localStorage.setItem("cv", JSON.stringify(cv));
    navigate("/step3");
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
