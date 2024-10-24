import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCVs } from "../utils/localStorage";

interface CV {
  name: string;
  experience: string;
  skills: string;
}

const CVListPage = () => {
  const [cvs, setCVs] = useState<CV[]>([]);
  const [filteredCVs, setFilteredCVs] = useState<CV[]>([]);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const storedCVs = getCVs() as CV[];
    if (Array.isArray(storedCVs)) {
      setCVs(storedCVs);
      setFilteredCVs(storedCVs);
    }
    console.log("Stored CVs:", storedCVs);
  }, []);

  const handleFilter = (criteria: string) => {
    setFilterTerm(criteria);
    if (!criteria) {
      setFilteredCVs(cvs);
    } else {
      const filtered = cvs.filter((cv) =>
        cv.name.toLowerCase().includes(criteria.toLowerCase())
      );
      setFilteredCVs(filtered);
    }
  };

  return (
    <div>
      <h2>All CVs</h2>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterTerm}
        onChange={(e) => handleFilter(e.target.value)}
      />
      <ul>
        {filteredCVs.length > 0 ? (
          filteredCVs.map((cv, index) => (
            <li key={index}>
              <Link to={`/resume/${index}`}>{cv.name}</Link>
            </li>
          ))
        ) : (
          <li>No CVs found</li>
        )}
      </ul>
    </div>
  );
};

export default CVListPage;
