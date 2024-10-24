import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step1 = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cv") || "{}");
    if (savedData.name) {
      setName(savedData.name);
    }
  }, []);

  const handleNext = () => {
    const cv = JSON.parse(localStorage.getItem("cv") || "{}");
    cv.name = name;
    localStorage.setItem("cv", JSON.stringify(cv));
    navigate("/step2");
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <FormStep onSubmit={handleNext}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </FormStep>
    </div>
  );
};

export default Step1;
