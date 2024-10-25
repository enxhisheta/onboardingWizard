import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Welcome to the Onboarding Wizard</h2>
    <p>Please click the button below to start:</p>
    <button>
      <Link to="/step1" className="link">
        Start Onboarding
      </Link>
    </button>
  </div>
);

export default HomePage;
