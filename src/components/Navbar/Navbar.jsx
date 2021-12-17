import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";

function Navbar() {
    return (
        <motion.div className='navbar'
        initial={{opacity:0, y:-200}}
        animate={{opacity:1, y:0}}
        transition={{
            ease: [.6,.65,0,.98],
            duration: .7,
           
        }}>
           <div className="global__wrapper">
               {/* navbar left */}
               

               <div className="navbar__links">
                   <p><Link to="/"  className="navbar__link">Home</Link></p>
                   <p ><Link to="/about" className="navbar__link">About</Link></p>
               </div>
            

               {/* navbar right */}

               <div className="navbar__themes">
                   {/* <h1 className="dark-theme">dark mode</h1> */}
                <div className="navbar__theme global__yellow"></div>
                    <div className="navbar__theme global__green"></div>
                    <div className="navbar__theme global__pink"></div>
               </div>
           </div>
        </motion.div>
    )
}

export default Navbar
