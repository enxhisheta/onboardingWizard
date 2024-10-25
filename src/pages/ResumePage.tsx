import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCV } from "../utils/localStorage";

const ResumePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cv, setCV] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    experience?: string;
    skills?: string;
  }>({});

  useEffect(() => {
    const cvData = getCV(Number(id));
    if (cvData) {
      setCV(cvData);
    }
  }, [id]);

  const handleEdit = (step: string) => {
    navigate(`/${step}`, { state: { cv, id } });
  };

  return (
    <div>
      <h2>Resume for {cv.name}</h2>
      <p>Email: {cv.email}</p>
      <p>Phone: {cv.phone}</p>
      <p>Experience: {cv.experience}</p>
      <p>Skills: {cv.skills}</p>
      <button onClick={() => handleEdit("step1")}>Edit Step 1</button>
      <button onClick={() => handleEdit("step2")}>Edit Step 2</button>
      <button onClick={() => handleEdit("step3")}>Edit Step 3</button>
      <button onClick={() => navigate("/cvs")}>Back to CV List</button>
    </div>
  );
};

export default ResumePage;
