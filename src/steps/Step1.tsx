import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormStep from "../components/FormStep";

interface CV {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

const Step1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (editing && cv) {
      setName(cv.name || "");
      setEmail(cv.email || "");
      setPhone(cv.phone || "");
    }
  }, [cv, editing]);

  const getNextId = (existingCVs: CV[]): number => {
    if (existingCVs.length === 0) {
      return 1;
    }
    return Math.max(...existingCVs.map((existingCV) => existingCV.id)) + 1;
  };

  const handleNext = () => {
    const existingCVs: CV[] = JSON.parse(localStorage.getItem("cvs") || "[]");

    const updatedCV: CV = {
      id: cv ? cv.id : getNextId(existingCVs),
      name,
      email,
      phone,
    };

    const cvIndex = existingCVs.findIndex(
      (existingCV) => existingCV.id === cv?.id
    );

    if (cvIndex !== -1) {
      existingCVs[cvIndex] = updatedCV;
      localStorage.setItem("cvs", JSON.stringify(existingCVs));
      navigate("/resume", { state: { cv: updatedCV } });
    } else {
      localStorage.setItem("cv", JSON.stringify(updatedCV));
      navigate("/step2", { state: { cv: updatedCV } });
    }
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
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </label>
      </FormStep>
    </div>
  );
};

export default Step1;
