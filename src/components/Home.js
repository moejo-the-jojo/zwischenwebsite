import {useNavigate} from "react-router-dom";


const Home = (props) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h2>U ok?</h2>
            <button onClick={() => navigate("/about")}>About</button>
        </div>
    )
}

export default Home;