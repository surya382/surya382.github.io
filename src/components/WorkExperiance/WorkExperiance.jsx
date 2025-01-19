import React from 'react'
import { Container } from 'react-bootstrap'
import ExperianceCard from './ExperianceCard';
import vmLogo from '../../../src/Assets/vmlogo.webp'

const WorkExperiance = () => {
  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "Intern + Full stack developer",
        company: "Vmedulife Software",
        companylogo: vmLogo,
        date: "May 2023 – Present",
        desc: "ERP Software.",
        descBullets: [
          "Led the development of an Academic Planning module for 10,000+ users collaborating with teams to improve academic efficiency.",
          "Developed a feedback module that increased engagement by 25%, streamlining the feedback process for students and faculty",
          "Resolved critical production bugs that improved system stability and reduced downtime.",
          `Implemented an import feature that allows faculty members to upload Excel files
          containing academic data. Developed functionality to parse and validate the data,
          ensuring accuracy before it is inserted into the database.This streamlined data
          entry, reducing manual effort and ensuring consistent and error - free information
          storage.
          `,
          "Integrated and optimized third-party libraries to enhance app functionality and reduce development time.",
          "Successfully delivered client requirements by developing and implementing solutions ahead of deadlines, improving client satisfaction."
        ]
      },

    ]
  };

  return (
    <Container fluid className="experianceSec container" id="experianceDiv">

      <div>
        <h1 style={{ fontSize: "2em" }}>Work <strong className="purple">Experiance</strong></h1>
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