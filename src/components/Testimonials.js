import React, { Component } from "react";
import FadeIn from "./FadeIn";

class Testimonials extends Component {
  render() {
    const testimonials = this.props.sharedTestimonials || [];
    const sectionName = this.props.resumeBasicInfo?.section_name?.testimonials || "Testimonials";

    if (!testimonials || testimonials.length === 0) {
      return null;
    }

    return (
      <section id="testimonials" style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(0, 217, 255, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.08) 0%, transparent 40%)',
          pointerEvents: 'none'
        }}></div>
        
        <div className="col-md-12" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h1 className="section-title" style={{ color: "white" }}>
              <span>{sectionName}</span>
            </h1>
          </FadeIn>
          
          <div className="col-md-10 mx-auto">
            <div className="row" style={{ justifyContent: 'center' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <FadeIn delay={index * 0.15}>
                    <div 
                      className="glass-card hover-lift"
                      style={{
                        padding: '2rem',
                        height: '100%',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {/* Quote icon */}
                      <div style={{ marginBottom: '1rem' }}>
                        <span className="iconify" data-icon="mdi:format-quote-open" style={{ 
                          fontSize: '3rem', 
                          color: '#667eea',
                          opacity: 0.6
                        }}></span>
                      </div>
                      
                      {/* Testimonial text */}
                      <p style={{
                        fontSize: '1.3rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.7',
                        flex: 1,
                        fontStyle: 'italic'
                      }}>
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: '1.5rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(255, 255, 255, 0.2)'
                          }}
                        />
                        <div>
                          <h4 style={{
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            color: 'white',
                            margin: '0 0 0.2rem 0'
                          }}>
                            {testimonial.name}
                          </h4>
                          <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            margin: 0
                          }}>
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
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

export default Testimonials;
