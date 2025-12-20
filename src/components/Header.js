import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="row aligner" style={{flex: 1, padding: '0 20px'}}>
          <div className="col-md-12">
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Mobile Developer Icons */}
              <div className="header-icons-container" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <span 
                  className="iconify header-icon" 
                  data-icon="mdi:code-braces" 
                  data-inline="false"
                ></span>
                <span 
                  className="iconify header-icon" 
                  data-icon="mdi:cellphone" 
                  data-inline="false"
                ></span>
              </div>
              
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              
              {/* Download Resume Button */}
              <a 
                href="https://www.linkedin.com/in/mohammad-shasho/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  marginTop: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '30px',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.4rem',
                  fontWeight: '500',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span className="iconify" data-icon="mdi:linkedin" data-inline="false" style={{ marginRight: '8px', verticalAlign: 'middle' }}></span>
                Connect on LinkedIn
              </a>
              
              <div style={{ marginTop: '2rem' }}>
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#4a4a68"
                  onColor="#667eea"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="ph:moon-stars-fill"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 22,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#f0f0f0",
                        lineHeight: "40px",
                      }}
                    ></span>
                  }
                  checkedIcon={
                    <span
                      className="iconify"
                      data-icon="ph:sun-fill"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 22,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#FFD700",
                        lineHeight: "40px",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
          }}
        >
          <span 
            className="iconify" 
            data-icon="mdi:chevron-double-down" 
            data-inline="false"
            style={{ fontSize: '40px', color: 'rgba(255, 255, 255, 0.6)' }}
          ></span>
        </div>
        
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
          }
        `}</style>
      </header>
    );
  }
}

export default Header;
