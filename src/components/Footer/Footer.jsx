import "./Footer.scss";
import {AiFillGithub, AiFillGitlab, AiFillLinkedin} from "react-icons/ai"

function Footer() {
    return (
        <div className="footer">
           <div className="global__wrapper">
               {/* footer left */}
               <div className="footer__resume">
                    <p className="footer__resume__link"> Resume</p>
               </div>

               {/* footer center */}
               <div className="footer__credits">
                    <p>Made by Woron</p>
               </div>

               {/* footer right */}
               <div className="footer__social-icons">
               <AiFillGithub className="icon" size="22"/>
                <AiFillLinkedin className="icon" size="22"/>
                <AiFillGitlab className="icon" size="22"/>
               </div>
           </div>
        </div>
    )
}

export default Footer
