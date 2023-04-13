import './About.css'
import desktop from '../../Images/desktop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../components/FontSkills';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({ x: '-10%' })
        }
    }, [inView])

    return (
        <div className='section-lg'>
            <div className="container">
                <div className="about-container">
                    <h1 className='h1'>What I Do</h1>
                    <p className='lead'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <h3 className='h3'>Full Stack Development</h3>
                    <motion.div
                        ref={ref}
                        animate={animation}
                        className="skills-wrapper">
                        <img src={desktop} alt="" />
                        <div className='skills'>
                            <div className="fontskills">
                                {skills.map((skill) => (
                                    <FontAwesomeIcon className='font-skills' icon={skill.icon} title={skill.name} style={{ color: skill.color }} />
                                ))}
                            </div>
                            <p>⚡ Building responsive Single-Page-Websites in React.js</p>
                            <p>⚡ Building responsive static websites using React.js</p>
                            <p>⚡ Building RESTful APIs using NodeJs & ExpressJs Frameworks</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
