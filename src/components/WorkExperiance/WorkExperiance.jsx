import React from 'react'
import { Container } from 'react-bootstrap'
import ExperianceCard from './ExperianceCard';

const WorkExperiance = () => {
  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "Intern + SDE 1",
        company: "Vmedulife",
        companylogo: "https://img.utdstc.com/icon/967/fd3/967fd3d33c5ae82d0e7d781cfb03723f12dd39ccdfc27ac88f0985780908e72f:100",
        date: "May 2023 – Present",
        desc: "ERP Software.",
        descBullets: [
          "Improved page load time by using performance optimization techniques.",
          "Reduced API response time through efficient use of asynchronous operations.",
          "Resolved critical production bugs that improved system stability and reduced downtime.",
          "Led the development of an Academic Planning module, coordinating with a cross-functional team to deliver a solution that enhanced academic efficiency.",
          "Developed a module for collecting online feedback from students and faculty, improving the feedback process and engagement.",
          "Successfully delivered client requirements by developing and implementing solutions ahead of deadlines, improving client satisfaction."
        ]
      },

    ]
  };

  return (
    <Container fluid className="experianceSec container" id="experianceDiv">

      <div>
        <h1>Work <strong className="purple">Experiance</strong></h1>
        {/* <h1 className="experience-heading">Experiences</h1> */}
        <div className="experience-cards-div">
          {workExperiences.experience.map((card, i) => {
            return (
              <ExperianceCard
                key={i}

                cardInfo={{
                  company: card.company,
                  desc: card.desc,
                  date: card.date,
                  companylogo: card.companylogo,
                  role: card.role,
                  descBullets: card.descBullets
                }}
              />
            );
          })}
        </div>
      </div>

    </Container>
  )
}

export default WorkExperiance