import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="contentContainer">
      <div className="content">
        {/* <button onClick={() => navigate("/ueber-uns")}>
          zur testpage bitte hier
        </button> */}
        {"Willkommen beim Zwischenspiel! <3"}
        <br></br>
        <button onClick={() => navigate("/naechste-show")}>
          Nächsten Show!
        </button>
      </div>
    </div>
  );
};

export default Home;
