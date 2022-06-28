import logo from "assets/logo_WH.avif"
import "./footer.scss"

function Footer() {
    return (
        <>
            <footer>
                <div className="logo_content">
                    <img src={logo}></img>
                </div>
            </footer>
        </>
    )
}
export default Footer;