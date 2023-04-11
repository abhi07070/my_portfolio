import React from 'react'
import './Project.css'
// import { experience } from '../../components/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { project } from '../../components/Project';

const Project = () => {
    return (
        <section className='section-bg'>
            <div className="project-detail">
                <div className="header">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <h1>Project</h1>
                </div>
                <div className="project-wrap">
                    {project.map((data) => (
                        <div className="wrapper">
                            <h1>{data.name}</h1>
                            <p>{data.desc}</p>
                            <span><b>Skills: </b>{data.skills}</span>
                            <div className="btns">
                                <a href={data.link} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon className='git-btn' icon={faGithub} />
                                </a>
                                {data.demo !== '' &&
                                    <div className="demo demo-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                        <h4>Demo</h4>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Project
