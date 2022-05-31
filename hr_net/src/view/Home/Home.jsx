import Form from "components/createEmployee/Form";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./home.scss"

function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="form_container">
                    <h1 className="form_title">Create Employee</h1>
                    <Form></Form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;