import React, { Component } from "react";
import FadeIn from "./FadeIn";

class Education extends Component {
  render() {
    const education = this.props.sharedEducation || [];
    const certificates = this.props.sharedCertificates || [];
    const sectionName = this.props.resumeBasicInfo?.section_name?.education || "Education";

    if (education.length === 0 && certificates.length === 0) {
      return null;
    }

    return (
      <section id="education" style={{
        background: 'linear-gradient(180deg, var(--bg-light) 0%, #e8ecf3 100%)',
        padding: '8rem 0'
      }}>
        <div className="col-md-12">
          <FadeIn>
            <h1 className="section-title" style={{ color: "var(--text-primary)" }}>
              <span>{sectionName}</span>
            </h1>
          </FadeIn>
          
          <div className="col-md-10 mx-auto">
            {/* Education - Optimized Layout */}
            {education.length > 0 && (
              <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
                {education.map((edu, index) => (
                  <FadeIn key={index} fullWidth>
                    <div 
                      className="glass-card hover-lift"
                      style={{
                        padding: '2.5rem',
                        background: 'var(--bg-card, #fff)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                      }}
                    >
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                      }}>
                        <i className={edu.icon} style={{ fontSize: '2.5rem', color: 'white' }}></i>
                      </div>
                      <div style={{ textAlign: 'left', flex: 1, minWidth: '250px' }}>
                        <h3 style={{ 
                          fontSize: '1.8rem', 
                          fontWeight: '700', 
                          color: 'var(--text-primary)',
                          margin: '0 0 0.5rem 0'
                        }}>
                          {edu.degree}
                        </h3>
                        <p style={{ 
                          fontSize: '1.4rem', 
                          color: '#667eea',
                          fontWeight: '600',
                          margin: '0 0 0.3rem 0'
                        }}>
                          {edu.institution}
                        </p>
                        <p style={{ 
                          fontSize: '1.2rem', 
                          color: 'var(--text-secondary)',
                          margin: '0 0 0.5rem 0',
                          fontWeight: '500'
                        }}>
                          {edu.years}
                        </p>
                        {edu.description && (
                          <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-muted)',
                            margin: 0,
                            fontStyle: 'italic'
                          }}>
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
            
            {/* Certificates */}
            {certificates.length > 0 && (
              <div>
                <FadeIn>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}>
                    Certifications
                  </h2>
                </FadeIn>
                <div className="row" style={{ justifyContent: 'center' }}>
                  {certificates.map((cert, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                      <FadeIn delay={index * 0.1}>
                        <div 
                          className="glass-card hover-lift"
                          style={{
                            padding: '1.5rem',
                            height: '100%',
                            textAlign: 'center',
                            background: 'var(--bg-card, #fff)'
                          }}
                        >
                          <i className={cert.icon} style={{ 
                            fontSize: '2.5rem', 
                            color: '#667eea',
                            marginBottom: '1rem',
                            display: 'block'
                          }}></i>
                          <h4 style={{
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            margin: '0 0 0.5rem 0'
                          }}>
                            {cert.name}
                          </h4>
                          <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            margin: '0 0 0.3rem 0'
                          }}>
                            {cert.issuer}
                          </p>
                          <span style={{
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            fontWeight: '500'
                          }}>
                            {cert.year}
                          </span>
                        </div>
                      </FadeIn>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
