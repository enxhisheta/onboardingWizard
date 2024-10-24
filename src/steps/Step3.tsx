import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step3 = () => {
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cv") || "{}");
    if (savedData.skills) {
      setSkills(savedData.skills);
    }
  }, []);

  const handleNext = () => {
    const cv = JSON.parse(localStorage.getItem("cv") || "{}");
    cv.skills = skills;
    const cvs = JSON.parse(localStorage.getItem("cvs") || "[]");
    cvs.push(cv);
    localStorage.setItem("cvs", JSON.stringify(cvs));
    localStorage.removeItem("cv");
    navigate("/cvs");
  };

  return (
    <div>
      <h2>Step 3: Skills</h2>
      <FormStep onSubmit={handleNext}>
        <label>
          Skills:
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
      </FormStep>
    </div>
  );
};

export default Step3;
