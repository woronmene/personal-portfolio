import {useState} from "react";
import "./Project.scss";
import {motion} from "framer-motion";
import Technologies from "./Technologies/Technologies";
import {RiGithubLine} from "react-icons/ri";
import {HiOutlineExternalLink} from "react-icons/hi";



const mainCardVariant ={
    rest:{
        scale: 1
    },
    hover: {
        scale: 1.1
    }
}

const cardContentVariant= {
    rest: {},
    hover: {
        height: '90%'
    },
    tap: {
        height: '90%'
    }
};



function Project({status}) {
const [showCardContent, setShowCardContent] = useState(false);

// const showContent = ()=>{
//     setShowCardContent(!showCardContent);
//     console.log(showCardContent);

// }
//  

    return (
        <div className="project">
            <motion.div className="project__card" variants={mainCardVariant} initial="rest"  whileHover="hover" whileTap={()=>{
                setShowCardContent(!showCardContent)
            }}     >
                <motion.div className={`project__card__content ${showCardContent? 'active-content':''}`} variants={cardContentVariant}>
                    <h2 className="project__card__content__title">Skimma</h2>
                    <p className="project__card__content__description">A design tool for designers and developers to easily and quickly
                     create color schemes based on their color preference</p>
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
                </motion.div>
            </motion.div>
    
         
            
   
        </div>
    )
}

export default Project
// import React from "react";

// import styled from "styled-components";
// import { motion } from "framer-motion";

// const textMotion = {
//   rest: {
//     color: "grey",
//     x: 0,
//     transition: {
//       duration: 2,
//       type: "tween",
//       ease: "easeIn"
//     }
//   },
//   hover: {
//     color: "blue",
//     x: 30,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeOut"
//     }
//   }
// };

// const slashMotion = {
//   rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//   hover: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeIn"
//     }
//   }
// };

// const HoverTest = () => {
//   return (
//     <Container initial="rest" whileHover="hover" animate="rest">
//       <SlashContainer variants={slashMotion}>
//         <svg width="1em" height="1em" viewBox="0 0 27 50">
//           <path
//             fill="#154FFF"
//             d="M21.177 0L0 50h5.818L26.995 0z"
//             fillRule="evenodd"
//           />
//         </svg>
//       </SlashContainer>
//       <motion.h1 variants={textMotion}>Hover me!</motion.h1>
//     </Container>
//   );
// };
// export default HoverTest;

// const Container = styled(motion.div)`
//   position: relative;
//   max-width: 200px;
//   cursor: pointer;
//   border: 1px solid red;
// `;

// const SlashContainer = styled(motion.div)`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   opacity: 0;

//   transform: translateY(-50%);

//   svg {
//     width: auto;
//     height: 50px;
//     object-fit: scale-down;
//   }
// `;
