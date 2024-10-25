import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (editing && cv?.skills) {
      setSkills(cv.skills);
    }
  }, [cv, editing]);

  const handleNext = () => {
    const updatedCV = { ...cv, skills };
    const storedCVs = JSON.parse(localStorage.getItem("cvs") || "[]");
    storedCVs.push(updatedCV);
    localStorage.setItem("cvs", JSON.stringify(storedCVs));
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
