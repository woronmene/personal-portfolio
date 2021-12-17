import "./Sidebar.scss";
import {AiFillGithub, AiFillGitlab, AiFillLinkedin} from "react-icons/ai"
import { motion } from "framer-motion";

function Sidebar() {
    return (
        <motion.div className="sidebar"
        initial={{opacity:0, x:-200}}
        animate={{opacity:1, x:0}}
        transition={{
            ease: [.6,.65,0,.98],
            duration: 1,
            delay: .5,
           
           
        }}>
            <div className="social-icons">
                <AiFillGithub className="icon" size="22" alt="Github"/>
                <AiFillLinkedin className="icon" size="22"/>
                <AiFillGitlab className="icon" size="22"/>
            </div>
        </motion.div>
    )
}

export default Sidebar
