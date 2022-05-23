import CustomNav from "../customNav/CustomNav";
import "./header.scss"


function Header() {
    return (
        <>
            <header>
                <h1>HRnet.</h1>
                <nav>
                    <CustomNav to="/" label="Add" />
                    <CustomNav to="/employees" label="view" />
                </nav>
            </header>
        </>
    )
}

export default Header;