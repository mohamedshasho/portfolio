import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import FadeIn from "./FadeIn";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#667eea",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
          >
            {/* Mobile Date Optimization */}
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <Badge 
                pill 
                className="main-badge" 
                style={{ 
                  background: 'var(--gradient-primary)', 
                  display: 'inline-block', 
                  marginBottom: '10px',
                  fontSize: '12px'
                }}
              >
                {work.years}
              </Badge>
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontWeight: '700', fontSize: '1.6rem' }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", color: 'var(--text-secondary)', fontWeight: '500', marginTop: '5px' }}
            >
              {work.company}
            </h4>
            
            <div style={{ textAlign: "left", marginTop: "15px", marginBottom: "15px" }}>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {work.description}
              </p>
              
              {/* Responsibilities */}
              {work.responsibilities && (
                <ul style={{ 
                  listStyleType: 'disc', 
                  paddingLeft: '20px', 
                  marginTop: '10px',
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}>
                  {work.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: '5px' }}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
            
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              {mainTech}
              {tech}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <FadeIn>
              <h1 className="section-title" style={{ color: "black" }}>
                <span className="text-black" style={{ textAlign: "center" }}>
                  {sectionName}
                </span>
              </h1>
            </FadeIn>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#667eea",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start experience-icon" style={{ marginTop: '30%' }}></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
