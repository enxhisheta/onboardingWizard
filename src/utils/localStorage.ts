interface CV {
  name: string;
  experience: string;
  skills: string;
}

export const saveCV = (cv: CV) => {
  const storedCVs = JSON.parse(localStorage.getItem("cvs") || "[]");
  storedCVs.push(cv);
  localStorage.setItem("cvs", JSON.stringify(storedCVs));
};

export const getCVs = (): CV[] => {
  return JSON.parse(localStorage.getItem("cvs") || "[]");
};

export const getCV = (id: number): CV | undefined => {
  const cvs = getCVs();
  return cvs[id];
};
