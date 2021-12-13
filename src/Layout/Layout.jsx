import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <Sidebar/>

            {props.children}
            <Footer/>
            
        </div>
    )
}

export default Layout
