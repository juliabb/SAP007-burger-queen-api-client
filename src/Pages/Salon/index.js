import Header from "../../components/Header"
import ButtonLogout from "../../components/Button/Button-logout"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"

function Salon() {
    return (
        <div>
            <ButtonLogout />
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export default Salon