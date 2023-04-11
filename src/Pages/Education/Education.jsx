import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <section className="education-wrap">
            <div className="education-container">
                <div className="education-details">
                    <div className="header">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        <h1>Education</h1>
                    </div>
                </div>
                <div className="education-box">
                    <h2>Harvard University</h2>
                    <p className='p'>Master of Science in Computer Science</p>
                    <div className="spans">
                        <span>September 2017 -April 2019</span>
                        <span>Grade A</span>
                    </div>
                    <p>Participated in research of XXX and published 3 papers.</p>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt?</li>
                </div>
            </div>
        </section>
    )
}

export default Education
