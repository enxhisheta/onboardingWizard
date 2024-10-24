import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCV } from "../utils/localStorage";

const ResumePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cv, setCV] = useState<{
    name?: string;
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
    navigate(`/${step}`, { state: { cv, id, editing: true } });
  };

  return (
    <div>
      <h2>Resume for {cv.name}</h2>
      <p>Experience: {cv.experience}</p>
      <p>Skills: {cv.skills}</p>
      <button onClick={() => handleEdit("step1")}>Edit Step 1</button>
      <button onClick={() => handleEdit("step2")}>Edit Step 2</button>
      <button onClick={() => handleEdit("step3")}>Edit Step 3</button>
    </div>
  );
};

export default ResumePage;
