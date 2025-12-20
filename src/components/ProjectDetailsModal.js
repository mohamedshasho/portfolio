import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";


class ProjectDetailsModal extends Component {

  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      var play_url = this.props.data.play_url;
      var apple_url = this.props.data.apple_url;
      var role = this.props.data.role;
      var achievements = this.props.data.achievements;
      var featured = this.props.data.featured;
      var downloads = this.props.data.downloads;

      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
    const check = document.documentElement.lang !== 'en'

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            {/* Title with badges */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '10px',
              flexDirection: check ? 'row-reverse' : 'row'
            }}>
              <h3 style={{ 
                padding: "5px 5px 0 5px", 
                margin: 0,
                fontSize: '2rem',
                fontWeight: '600'
              }} className={`${check ? "modal-titleAr" : null}`}>
                {title}
              </h3>
              
              {featured && (
                <span style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  ⭐ Featured
                </span>
              )}
              
              {downloads && (
                <span style={{
                  background: 'linear-gradient(135deg, #00f5a0 0%, #00D9FF 100%)',
                  color: '#0f0c29',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  📥 {downloads}
                </span>
              )}
            </div>
            
            {/* Role badge */}
            {role && (
              <div style={{ 
                marginBottom: '15px',
                textAlign: check ? 'right' : 'left'
              }}>
                <span style={{
                  background: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  border: '1px solid rgba(102, 126, 234, 0.2)'
                }}>
                  <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
                  {role}
                </span>
              </div>
            )}
            
            {/* Links */}
            <div style={{ marginBottom: '15px', textAlign: check ? 'right' : 'left' }}>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                  style={{
                    marginRight: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '1.3rem'
                  }}
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              )}
              {play_url && (
                <a
                  href={play_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '1.3rem',
                    color: '#3DDC84',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fab fa-google-play"></i>
                  Play Store
                </a>
              )}
              {apple_url && (
                <a
                  href={apple_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '1.3rem',
                    color: '#0071e3',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fab fa-app-store-ios"></i>
                  App Store
                </a>
              )}
            </div>
            
            {/* Description */}
            <p className={`${check ? "modal-descriptionAr" : "modal-description"}`} 
               style={{ fontSize: '1.4rem', lineHeight: '1.7' }}>
              {description}
            </p>
            
            {/* Achievements */}
            {achievements && achievements.length > 0 && (
              <div style={{ 
                marginBottom: '20px',
                textAlign: check ? 'right' : 'left'
              }}>
                <h4 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: 'var(--text-primary)'
                }}>
                  Key Achievements
                </h4>
                <ul style={{ 
                  paddingLeft: check ? 0 : '1.5rem',
                  paddingRight: check ? '1.5rem' : 0,
                  margin: 0,
                  listStyle: check ? 'none' : 'disc'
                }}>
                  {achievements.map((achievement, i) => (
                    <li key={i} style={{ 
                      fontSize: '1.3rem',
                      marginBottom: '5px',
                      color: 'var(--text-secondary)'
                    }}>
                      {check && '• '}{achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Technologies */}
            <div className="col-md-12 text-center" style={{ marginTop: '20px' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600',
                marginBottom: '15px',
                color: 'var(--text-secondary)'
              }}>
                Technologies Used
              </h4>
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
