import "./Footer.scss";
import {AiFillGithub, AiFillGitlab, AiFillLinkedin} from "react-icons/ai"

function Footer() {
    return (
        <div className="footer">
           <div className="footer__wrapper">
               {/* footer left */}
               <div className="resume">
                    <p className="resume__link"> Resume</p>
               </div>

               {/* footer center */}
               <div className="credits">
                    <p>Made by Woron</p>
               </div>

               {/* footer right */}
               <div className="social-icons">
               <AiFillGithub className="icon" size="22"/>
                <AiFillLinkedin className="icon" size="22"/>
                <AiFillGitlab className="icon" size="22"/>
               </div>
           </div>
        </div>
    )
}

export default Footer
