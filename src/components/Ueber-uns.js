import {useNavigate} from "react-router-dom";

const UeberUns = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                This is a testpage called über uns...
            </div>
            <button onClick={() => navigate("/")}>Go back home??</button>
        </div>
    )

}

export default UeberUns;