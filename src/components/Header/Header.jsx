import "./Header.scss"
import { motion } from "framer-motion";



const headerVariant = {
    rest:{
        opacity: 0, 
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            ease: [.01,1,.89,.96],
            duration: .8,
            delay: 1.3,
        }
    }
};


function Header() {
    return (
        <div className="header">
            <div className="header__content global__container">

                <div className="header__content__text">
                <motion.h1 className="global__mainText"
                variants={headerVariant}
                initial="rest"
                animate="visible"
               >I'm Woron  a Front-end Web Developer at Apps-pot LLC and Edekee LLC</motion.h1>
                </div>
          
            

            </div>

        </div>
    )
}

export default Header
