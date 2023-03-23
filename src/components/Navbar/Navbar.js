import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/"><Button>Search</Button></Link>
            <Link to="/random"><Button>Random</Button></Link>
        </nav>
    )
}

export default Navbar;


