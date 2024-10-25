import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormStep from "../components/FormStep";

interface CV {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  experience?: string;
  skills?: string;
}

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};
  const [skills, setSkills] = useState<string>("");

  useEffect(() => {
    if (editing && cv?.skills) {
      setSkills(cv.skills);
    }
  }, [cv, editing]);

  const handleNext = () => {
    const updatedCV = { ...cv, skills };
    const existingCVs: CV[] = JSON.parse(localStorage.getItem("cvs") || "[]");
    const cvIndex = existingCVs.findIndex(
      (existingCV) => existingCV.id === cv?.id
    );

    if (cvIndex !== -1) {
      existingCVs[cvIndex] = updatedCV;
      localStorage.setItem("cvs", JSON.stringify(existingCVs));
    } else {
      existingCVs.push(updatedCV);
      localStorage.setItem("cvs", JSON.stringify(existingCVs));
    }

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
