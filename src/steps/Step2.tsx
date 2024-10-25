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

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};
  const [experience, setExperience] = useState<string>("");

  useEffect(() => {
    if (editing && cv?.experience) {
      setExperience(cv.experience);
    }
  }, [cv, editing]);

  const handleNext = () => {
    const existingCVs: CV[] = JSON.parse(localStorage.getItem("cvs") || "[]");
    const updatedCV = { ...cv, experience };

    const cvIndex = existingCVs.findIndex(
      (existingCV) => existingCV.id === cv?.id
    );

    if (cvIndex !== -1) {
      existingCVs[cvIndex] = updatedCV;
      localStorage.setItem("cvs", JSON.stringify(existingCVs));
      navigate("/resume", { state: { cv: updatedCV } });
    } else {
      localStorage.setItem("cv", JSON.stringify(updatedCV));
      navigate("/step3", { state: { cv: updatedCV } });
    }
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
