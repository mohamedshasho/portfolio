import React, { Component } from "react";
import { Icon } from "@iconify/react";
import androidIcon from "@iconify/icons-logos/android-icon";
import flutterIcon from "@iconify/icons-logos/flutter";
import kotlinIcon from "@iconify/icons-logos/kotlin";
import profileShasho from "../assets/myProfile.png";

class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }
    
    // Get stats from sharedBasicInfo if available
    const stats = this.props.stats || {
      years: "5+",
      projects: "10+",
      downloads: "50K+"
    };
    
    const check = document.documentElement.lang !== 'en';
    
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "var(--text-primary)" }}>
            <span>{sectionName}</span>
          </h1>
          
          {/* Stats Section */}
          <div className="stats-container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <div className="stat-item" style={{
              textAlign: 'center',
              padding: '1.5rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(102, 126, 234, 0.2)',
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{stats.years}</div>
              <div style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Years Experience</div>
            </div>
            <div className="stat-item" style={{
              textAlign: 'center',
              padding: '1.5rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(102, 126, 234, 0.2)',
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{stats.projects}</div>
              <div style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Projects Delivered</div>
            </div>
            <div className="stat-item" style={{
              textAlign: 'center',
              padding: '1.5rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(102, 126, 234, 0.2)',
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{stats.downloads}</div>
              <div style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', fontWeight: '500' }}>App Downloads</div>
            </div>
          </div>
          
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    src={profileShasho}
                    alt="Mohammad Shasho - Senior Mobile Developer"
                    style={{
                      borderRadius: '12px',
                      maxWidth: '200px',
                    }}
                  />
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '1rem',
                    marginTop: '1.5rem',
                    paddingBottom: '0.5rem'
                  }}>
                    <Icon
                      icon={flutterIcon}
                      style={{ fontSize: "350%", filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                    <Icon
                      icon={androidIcon}
                      style={{ fontSize: "350%", filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                    <Icon
                      icon={kotlinIcon}
                      style={{ fontSize: "350%", filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "140%",
                      lineHeight: "1.9",
                    }}
                  >
                    <br />
                    <span className={`wave ${check ? "waveAr" : null}`}>
                      {hello} {" "}
                      <span style={{ display: 'inline-block', animation: 'wave 2.5s infinite' }}>👋</span>
                    </span>
                    <br />
                    <br />
                    {check ? <p className="aboutAr">{about}</p> : about}
                    
                    {/* What I Do Section */}
                    <div style={{ 
                      marginTop: '2rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.8rem',
                      justifyContent: check ? 'flex-end' : 'flex-start'
                    }}>
                      {['Flutter', 'Android', 'iOS', 'Kotlin', 'Clean Architecture'].map((tech, i) => (
                        <span 
                          key={i}
                          style={{
                            padding: '0.5rem 1rem',
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                            borderRadius: '20px',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            color: '#667eea',
                            border: '1px solid rgba(102, 126, 234, 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            75% { transform: rotate(-20deg); }
          }
        `}</style>
      </section>
    );
  }
}

export default About;
