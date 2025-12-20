import React, { Component } from "react";
import FadeIn from "./FadeIn";

class Services extends Component {
  render() {
    const services = this.props.sharedServices;
    const sectionName = this.props.resumeBasicInfo?.section_name?.services || "Services";

    if (!services || services.length === 0) {
      return null;
    }

    return (
      <section id="services">
        <div className="col-md-12">
          <FadeIn>
            <h1 className="section-title">
              <span>{sectionName}</span>
            </h1>
          </FadeIn>
          
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto" style={{ justifyContent: 'center' }}>
              {services.map((service, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <FadeIn delay={index * 0.1}>
                    <div 
                      className="glass-card hover-lift"
                      style={{
                        padding: '2rem',
                        height: '100%',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        color: 'white',
                        fontSize: '2rem',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                      }}>
                        <i className={service.icon}></i>
                      </div>
                      
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                      }}>
                        {service.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {service.description}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
