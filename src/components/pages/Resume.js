import React from 'react'
import Navbar from '../ModelNavbar'

function Resume() {
  return (
    <>
        <Navbar/>
        <h2>Education</h2>
        <b>National University of Singapore</b>
        <li>Current Cumulative Average Points, CAP: 4.05/5</li>
        <li>Relevant modules taken: Data Structures & Algorithms, Design & Analysis of Algorithms,
Programming Methodology I & II, Software Engineering, Introduction to Artificial Intelligence</li>

        <b>Norwegian University of Science and Technology</b>
        <p>Faculty of Information Technology and Electrical Engineering – Semester Exchange Programme</p>
        <li>Relevant modules taken: Blockchain Technologies & Cryptocurrencies, Introduction to User-Centered Design, Advanced Software Design</li>
    
        <h2>Work Experience</h2>
        <b>DBS Bank Software Engineering Internship, Intern, Full Time</b>
        <li>Participated in full-stack development for internal banking web applications meant to facilitate liquidity management for corporations</li>
        <li>Utilised Angular, Typescript, HTML and CSS for front-end to enhance existing features and user interfaces to be more user-friendly</li>
        <li>Utilised Java, Spring, Hibernate and mySQL to implement and enhance back-end computations and data retrieval</li>
        <li>Carried out testing and fixed bugs in raised issues before deploying code for user acceptance testing and release</li>
        <li>Utilised tools like Bitbucket, Jira and Git for project management, followed REST, MVC frameworks and Agile methodology</li>
   
        <b>Fashion Model, Part-Time</b>
        <li>Adapt efficiently and tactfully to a variety of clients’ creative visions to promote products across different fields: luxury brands, clothing,
editorials</li>
        <li>Walk runway for fashion weeks: JW Anderson</li>

        <h2>Technical Experience</h2>
        <b>Languages</b>
        <li>Java: Strong</li>
        <li>C++: Moderate</li>
        <li>Javascript: Moderate</li>
        <li>Typescript: Moderate</li>
        <li>HTML&CSS: Moderate</li>
        <li>Python: Basic</li>
        <b>Frameworks</b>
        <li>Angular: Moderate</li>
        <li>React: Moderate</li>
        <li>Spring: Basic</li>
   </>
  )
}

export default Resume
