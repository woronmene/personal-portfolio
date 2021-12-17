import "./About.scss";
import {motion} from "framer-motion"
function About() {

const parentVariant = {

    rest:{
        opacity:1,
        x:0
    },
    visible: {
        opacity: 1,
        x:0,
        transition: 
        {
            // ease: [.01,1,.89,.96],
            // duration: .8,
            // // delay: 1.3,
            // staggerChildren: 0.5
        }
     
    }
}

const childrenVariant = {
    rest: {
        opacity: 0,
        y: 50
    },
    visible:{
        opacity: 1,
        y:0,
        transition: 
        {
            ease: [.01,1,.89,.96],
            duration: .8,
            delay: 1.3,
        }
    }

}

    return (
        <div className="about">
            
           <div className="about__content global__container">
           <h1 className="global__heading">Bio</h1>
        <motion.div className="about-par" variants={parentVariant} initial="rest" animate="visible">
            <motion.h2 variants={childrenVariant} >Hi I'm Woron</motion.h2>
           <motion.p variants={childrenVariant} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis asperiores optio magnam voluptatibus porro dolorum modi quae veniam fugit eos? Velit ipsum at libero totam delectus ea sit quaerat suscipit dolor! Aspernatur tempora cupiditate,to.</motion.p>
           <motion.p variants={childrenVariant} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis asperiores optio magnam voluptatibus porro dolorum modi quae veniam fugit eos? Velit ipsum at libero totam delectus ea sit quaerat suscipit dolor! Aspernatur tempora cupiditate, o.</motion.p>
           </motion.div>

           </div>
        </div>
    )
}

export default About
