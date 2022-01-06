import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import items from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function AppAlt() {
    const [jobs, setJobs] = useState(items);

    return (
        <div>
            {jobs.map((job) => {
                const { company, dates, duties, title } = job;
                return (
                    <section>
                        <div className='title'>
                            <h2>experience</h2>
                            <div className='underline'></div>
                        </div>
                        <article className='jobs-info' style={{ textAlign: 'center' }}>
                            <h3>{title}</h3>
                            <h4>{company}</h4>
                            <p className='job-date'>{dates}</p>
                            {duties.map((duty, index) => {
                                return <div key={index} className='job-desc'>
                                    <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            })}
                        </article>
                    </section>
                );
            })}
        </div >
    );
}

export default AppAlt