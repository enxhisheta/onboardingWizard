import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormStep from "../components/FormStep";

const Step1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cv, editing } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editing && cv) {
      setName(cv.name || "");
      setEmail(cv.email || "");
      setPhone(cv.phone || "");
    }
  }, [cv, editing]);

  const handleNext = () => {
    const updatedCV = { ...cv, name, email, phone };
    localStorage.setItem("cv", JSON.stringify(updatedCV));
    navigate("/step2", { state: { cv: updatedCV } });
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
            type="text"
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
