import Form from "components/CreateEmployee/Form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./home.scss"

function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="form_container">
                    <h2 className="form_title">Create Employee</h2>
                    <Form></Form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;