import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (project) {
        const isFeatured = project.featured;
        
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={project.title}
            style={{ cursor: "pointer", marginBottom: '30px' }}
          >
            <div 
              className="project-card"
              onClick={() => detailsModalShow(project)}
              style={{
                background: 'var(--bg-card, #fff)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'fill',
                    display: 'block'
                  }}
                />
                
                {/* Featured Badge */}
                {isFeatured && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 10px rgba(102, 126, 234, 0.4)'
                  }}>
                    <span role="img" aria-label="star">⭐</span> Featured
                  </div>
                )}
                
                {/* Date Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  {project.startDate}
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary, #1a1a2e)',
                  margin: '0 0 8px 0',
                  textAlign: 'center'
                }}>
                  {project.title}
                </h3>
                
                {/* Role indicator */}
                {project.role && (
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary, #4a4a68)',
                    margin: '0 0 12px 0',
                    textAlign: 'center',
                    opacity: 0.8
                  }}>
                    {project.role}
                  </p>
                )}
                
                {/* Tech pills */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {project.technologies && project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "var(--text-primary)" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
