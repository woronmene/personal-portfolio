import * as React from "react";

import "./Project.scss";
import {motion} from "framer-motion";

function Project() {
//  const { scrollYProgress } = useViewportScroll();
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    return (
        <div className="project">
            <motion.div className="project__card"  whileHover={{ scale: 1.1}}          >
                <div className="project__card__content">
                    <h2>Color Skima</h2>
                    
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