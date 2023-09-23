import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <NavLink to={"/"}>Go Back</NavLink>
        </div>
    );
};

export default ErrorPage;