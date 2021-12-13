import "./Header.scss"
import { motion } from "framer-motion";


function Header() {
    return (
        <div className="header">
            <div className="header__content global__container">

                <div className="header__content__text">
                <motion.h1 className="global__mainText"
                initial={{opacity:0, y:50}}
                animate={{opacity:1, y:0}}
                transition={{
                    ease: [.01,1,.89,.96],
                    duration: .8,
                    delay: 1.3,
                    
                   
                }}>I'm Woron  a Front-end Web Developer at Apps-pot LLC and Edekee LLC</motion.h1>
                </div>
                {/* <div className="header__content__arrow">
                    <svg width="46"
                    height="54"
                    viewBox="0 0 16 24"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M7.54289 22.7255C7.93342 23.116 8.56658 23.116 8.95711 22.7255L15.3211 16.3615C15.7116 15.971 15.7116 15.3378 15.3211 14.9473C14.9305 14.5568 14.2974 14.5568 13.9069 14.9473L8.25 20.6042L2.59315 14.9473C2.20262 14.5568 1.56946 14.5568 1.17893 14.9473C0.788408 15.3378 0.788408 15.971 1.17893 16.3615L7.54289 22.7255ZM7.25 0.996826L7.25 22.0184H9.25L9.25 0.996826L7.25 0.996826Z" fill="white"/>
                    </svg>    
                </div> */}
            

            </div>

        </div>
    )
}

export default Header
