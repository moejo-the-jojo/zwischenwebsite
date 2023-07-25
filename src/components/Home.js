import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="contentContainer">
      <h2>U ok?</h2>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/ueber-uns")}>
        zur testpage bitte hier
      </button>
    </div>
  );
};

export default Home;
