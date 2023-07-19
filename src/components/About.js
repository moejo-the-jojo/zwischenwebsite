import { useNavigate } from "react-router-dom";

const About = (props) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h3>This is the page about us!</h3>
            <button onClick={() => navigate("/about")}>About</button>
        </div>
    )
}

export default About;