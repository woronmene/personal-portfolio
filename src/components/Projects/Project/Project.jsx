import * as React from "react";

import "./Project.scss";
import {motion} from "framer-motion";
import Technologies from "./Technologies/Technologies";
import {RiGithubLine} from "react-icons/ri";
import {HiOutlineExternalLink} from "react-icons/hi";


function Project() {
//  const { scrollYProgress } = useViewportScroll();
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    return (
        <div className="project">
            <motion.div className="project__card"  whileHover={{ scale: 1.1}}          >
                <div className="project__card__content">
                    <h2 className="project__card__content__title">Skimma</h2>
                    <p className="project__card__content__description">A design tool for designers and developers to easily and quickly create color schemes based on their color preference</p>
                    <div className="project__card__content__technologies">
                       <Technologies technology="Next.js"/>
                       <Technologies technology="Tailwind Css"/>
                       <Technologies technology="Node.js"/>
                       <Technologies technology="Netlify"/>
                       <Technologies technology="React"/>
                    
            
                    </div>
                   
                    <div className="project__card__content__links">
                        <a className="github-link" href="/">
                            <RiGithubLine size="22"/>
                        </a>
                        <a className="deployed-link" href="/">
                            <HiOutlineExternalLink size="22"/>
                        </a>
                    </div>
                </div>
            </motion.div>
    
         
            
   
        </div>
    )
}

export default Project
// const { scrollYProgress } = useViewportScroll()
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  
// return (
//   <motion.div
//     style={{ scale }}
//   >
//     <motion.div
//       style={{
//         scaleY: scrollYProgress
//       }}
//     />
//   </motion.div>
// )